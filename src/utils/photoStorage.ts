import { useState, useEffect } from 'react';

const STORAGE_KEY = 'dr_vaish_custom_photos';

export function getCustomPhoto(doctorId: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data[doctorId] || null;
  } catch {
    return null;
  }
}

export function saveCustomPhoto(doctorId: string, dataUrl: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    data[doctorId] = dataUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('clinic-photo-updated', { detail: { doctorId } }));
  } catch (e) {
    console.error('Failed to save photo to localStorage', e);
  }
}

export function removeCustomPhoto(doctorId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    delete data[doctorId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('clinic-photo-updated', { detail: { doctorId } }));
  } catch (e) {
    console.error('Failed to remove photo from localStorage', e);
  }
}

export function useDoctorPhoto(doctorId: string, defaultImage: string = '') {
  const [photo, setPhoto] = useState<string>(() => {
    return getCustomPhoto(doctorId) || defaultImage || '';
  });

  useEffect(() => {
    // Sync initial state
    setPhoto(getCustomPhoto(doctorId) || defaultImage || '');

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ doctorId?: string }>;
      if (!customEvent.detail || customEvent.detail.doctorId === doctorId) {
        setPhoto(getCustomPhoto(doctorId) || defaultImage || '');
      }
    };

    window.addEventListener('clinic-photo-updated', handleUpdate);
    return () => {
      window.removeEventListener('clinic-photo-updated', handleUpdate);
    };
  }, [doctorId, defaultImage]);

  return photo;
}
