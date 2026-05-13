import React from 'react'

function useLocalStorage(itemName, initialValue) {
      
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
   setTimeout(() => {
     try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
        if (!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parseItem = initialValue;
        } else {
            parseItem = JSON.parse(localStorage.getItem(itemName))
            setItem(parseItem)
        }
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(true)
    }
   }, 2000);
  }, []);
  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }
    return {item, saveItem, loading, error}
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de introduccion a react', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LA PATITA', completed: false },
//   { text: 'usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')