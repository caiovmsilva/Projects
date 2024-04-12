import trips

from typing import Union
from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"]
)

@app.get('/trip/')
def get_best_trip(local: str = Query(..., description="Trip destination"), date: str = Query(..., description="Trip date DD-MM-YYYY format")):
    """ Function that returns most comfortable and fast trip and also the cheapest trip
    
    Args:
        local (str, optional): _description_. Defaults to Query(..., description="Trip destination").
        date (str, optional): _description_. Defaults to Query(..., description="Trip date in DD-MM-YYYY format").

    Raises:
        HTTPException: In case a parameter is not sent in the request.
    """
    try:
        if local is None or date is None:
            raise HTTPException(status_code=422, detail="Enter the values to calculate trip price.")
        
        all_trips = trips.get_all_trips()
        print(f'local: {local}')
        print(f'data: {date}')
        city_trips = trips.get_trips_by_city(all_trips, local)
        
        if type(city_trips) == str:
            return city_trips
        
        fastest_trip = trips.get_fastest_trip(city_trips)
        cheapest_trip = trips.get_cheapest_trip(city_trips)

        return {
            'fastest_trip': fastest_trip,
            'cheapest_trip': cheapest_trip,
        }
    except Exception as error:
        print(rf'An error has occurred while endpoint requisition: {error}')
