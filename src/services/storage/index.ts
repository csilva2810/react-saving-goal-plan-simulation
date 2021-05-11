export function setItem<Type>(key: string, payload: Type): void {
  try {
    localStorage.setItem(key, JSON.stringify(payload))
  } catch (e) {
    console.log('setItem:error', e);
  }
}

export function getItem<Type>(key: string): Type | null | undefined {
  try {
    const data = localStorage.getItem(key);

    if (!data) {
      return null;
    }

    return  JSON.parse(data);
  } catch (e) {
    console.log('getItem:error', e);
  }
}
