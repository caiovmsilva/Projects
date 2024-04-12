import json

def extract_price(price_str):
    return float(price_str.split()[1])

def extract_duration(duration_str):
    return int(duration_str.strip('hH'))


def get_cheapest_trip(destinations: list):
    try:

        trip_econ = min(destinations, key=lambda destination: extract_price(destination["price_econ"]))
        
        trip_comfort = min(destinations, key=lambda destination: extract_price(destination["price_confort"]))

        if trip_econ['price_econ'] <= trip_comfort['price_confort']:
            return trip_econ
        else :
            return trip_comfort
        
    except Exception as error:
        print(f'An error has occured when trying to capture the cheapest trip: {error}')


def get_all_trips():
    try:
        #It might be necessary to change this path to its correspondent in the test machine in order for it work
        data = json.load(open(r"/home/caio_lnv/Caio/Estudos/estagio/Challenge/desafio_coorlab/app/src/data/data.json", 'r', encoding='utf-8'))
        return data['transport']
    
    except Exception as error:
        print(rf'An error has occured when trying to access the database: {error}')


def get_trips_by_city(travels: list, city: str):
    try:
        data = []
        for travel in travels:
            if travel['city'] == city:
                data.append(travel)
        
        if len(data) == 0:
            return f'There are no trips available to the city {city}'
        
        return data
    
    except Exception as error:
        print(f'An unexpected error has occured when trying to find trips to the city {city}: {error}')

def get_fastest_trip(trips: list):
    try:

        fastest_trip = min(trips, key=lambda destination: extract_duration(destination["duration"]))
        return fastest_trip
    
    except Exception as error:
        print(f'An error has occured when trying to find the fastest trip: {error}')
