// store data
const SetStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

// Retrive Data

const GetStorage = (key: string) => {
  const data = localStorage.getItem(key);
  try {
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.log("Error Get Data", e);
  }
};

export { SetStorage, GetStorage };
