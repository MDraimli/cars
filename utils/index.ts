import { CarCardProps, CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'x-rapidapi-key': '365b53fabamsh2252037ddec51dcp19bf89jsnfb30aead9acd',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    // const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';
    const response = await fetch(url, { method: 'GET', headers });

    const data = await response.json();
    return data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    // const url = new URL("https://cdn.imagin.studio/getimage");
    // const { make, model, year } = car;
  
    // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    // url.searchParams.append('make', make);
    // url.searchParams.append('modelFamily', model.split(" ")[0]);
    // url.searchParams.append('zoomType', 'fullscreen');
    // url.searchParams.append('modelYear', `${year}`);
    // // url.searchParams.append('zoomLevel', zoomLevel);
    // url.searchParams.append('angle', `${angle}`);
  
    // return `${url}`;
    return '/hero.png';
  } 