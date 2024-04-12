<template>
    <div id="tripCalcutatorApp">
      
      <main>
        
        <aside>
  
          <div id="logoDiv">
            <img id="logoImage" src="../assets/CB_Viagens.png">
          </div>
  
          <div id="tripCalculatorAside">
  
            <div id="calculatorIconDiv">
              <img id="calculatorIconImage" src="../assets/math.png">
            </div>
            
            <p>Calculadora de Viagem</p>
          </div>
  
        </aside>
          <section id="tripCalculatorSection">
            <div id="fakeHeader"></div>
  
            <div id="tripCalculator">
  
              <div id="headerCalculator">
  
                <div id="headerCalculatorContent">
                  <img src="../assets/truck.png">
                  <p>Calculadora de Viagem</p>
                </div>
                
              </div>
  
              <div id="calculator">
  
                  <div id="tripInfo">
  
                    <div id="tripInfoContent">
  
                      <div id="tripInfoTitle">
  
                        <div id="tripInfoImage">
                          <img id="palmUpIconImage" src="../assets/palm_up.png">
                        </div>
                      
                        <p> Calcule o valor da Viagem</p>
                      </div>

                      <div id="formTripInfo">
                        <div class="max-w-xs">
                            <VaSelect
                              v-model="destination"
                              :options="options"
                              placeholder="Selecione um destino"
                              background="#ffffff"
                              color="#2c3e50"
                              label="Destino"
                              outter-label
                            />
                        </div>
                
                          <div class="custom-date-input">
                            <VaDateInput
                              v-model="valueDate"
                              :format="formatFn"
                              label="Date"
                              placeholder="Selecione uma data"
                              background="#ffffff"
                              color="#2c3e50"
                              manual-input
                            />
                          </div>
                      </div>

                      <div id="submitButton">
                        <VaButton 
                          tag="div"
                          style="width:200px; 
                          height:40px;"
                          text-color="#2c3e50"
                          color="#2EA0AB"
                          @click="getTrips"
                          >
                          
                          Buscar

                        </VaButton>
                      </div>

                    </div>
  
                  </div>
                <div id="resultCalculated">
                  <p v-if="!showResult" id="noResultCalculated">Nenhum dado selecionado.</p>
                  
                  <div id="tripResultContainer" v-if="showResult">
                    <TripResult 
                    :name_fastest_trip="fastestTrip['name']"
                    :bed="fastestTrip['bed']"
                    :duration_fast="fastestTrip['duration']"
                    :price_confort="fastestTrip['price_confort']"
                    :name_cheapest_trip="cheapestTrip['name']"
                    :seat="cheapestTrip['seat']"
                    :duration_cheap="cheapestTrip['duration']"
                    :price_econ="cheapestTrip['price_econ']"
                    ></TripResult>
                  </div>
                </div>
  
              </div>
  
            </div>
            
          </section>
          

        </main>
        
        <div id="warningCardContainer">
          <warningCard v-if="showWarningCard"></warningCard>          
        </div>


    </div>
</template>

<script>
import  WarningCard  from "./WarningCard.vue"
import TripResult from "./TripResult.vue"
import api from '../api.js'

export default {
  name: "BookTrip",
  data() {
    return {
      options: [
        "Belo Horizonte",
        "Campinas",
        "Curitiba",
        "Fortaleza",
        "Manaus",
        "Natal",
        "Recife",
        "Rio de Janeiro",
        "Salvador",
        "São Paulo"
      ],
      destination: "",
      valueDate: new Date(),
      isOpen: false,
      showWarningCard: false,
      showResult: false,
      fastestTrip: null,
      cheapestTrip: null,
      error: null,
    };
  },
  
  components: {
    WarningCard,
    TripResult
  },

  methods: {
    buscar() {
      this.showWarningCard = true;
    },
    formatFn(date) {
      return `${date.getDate()} - ${
        date.getMonth()
      } - ${date.getFullYear()}`;
    },

    async getTrips() {
      console.log("Eu entrei no getTrips!")
      this.error = null;

      try {
        console.log("Eu entrei no try!")
        const response = await api.get_Best_Trip(this.destination, this.valueDate);

        this.fastestTrip = response.data.fastest_trip;
        
        this.cheapestTrip = response.data.cheapest_trip;

        // console.log(response.data)
        // console.log(this.cheapestTrip)
        // console.log(this.fastestTrip)

        // console.log(this.destination)
        // console.log(this.valueDate)

        if (this.destination && this.valueDate){
        this.showResult = true;
        console.log(this.showResult)
        }
        else{
          this.showWarningCard = !this.showWarningCard;
        }
      } catch (erro){
        this.error = 'Erro ao buscar viagens'
      }

      
    },
    
  },
};



</script>

<style scoped>
aside{
  display: flex;
  flex-direction: column;
  background-color: #232f49 !important;
  color: #f0f0f0 !important;
  width: 330px;
  height: 100vh;
}

main{
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color:white;
}

#tripCalculatorApp{
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0 0 10px 10px;
}

#logoDiv{
  margin: 20px;
}

#logoImage{
  width: 150px;
}

#tripCalculatorAside{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
}

#tripCalculatorAside p{
  font-size: large;
  margin-inline-end: 0.5rem;
}

#calculatorIconDiv{
  width: 50px;
  display:flex;
  justify-content: center;
}

#calculatorIconImage{
  width: 35%;
}

#tripCalculatorSection{
  display: flex;
  width: 100%;
  height: 100vh;
  border-color: black !important;
  border-radius: 1.5rem;
  flex-direction: column;
}

#fakeHeader{
  width: 100%;
  height: 60px;
  background-color: #f0f0f0 !important;
  box-shadow: 0px 3px 3px rgb(50 50 50 / 40%);
}

#tripCalculator{
  margin: 5rem 2rem 8rem;
  box-shadow: 0px 0px 8px hsla(240,7%,62%,1);
  border-radius: 10px;
  height: 100vh;
}

#headerCalculator{
  display: flex;
  align-items: center;
  background-color: #232f49 !important;
  color: #f0f0f0;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

#headerCalculatorContent{
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 1.5rem;
}

#headerCalculator p{
  font-size:larger;
  font-weight: bold;
}

#tripInfo{
    display: flex;
    padding: 60px 30px 50px 30px;
    margin: 20px;
    background-color: #f0f0f0;
    width: 310px;
    height: 500px;
    flex-direction: column;
    border-radius: 10px;
}

#tripInfoImage{
  margin-inline: 10px;
}

#tripInfoTitle{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block: 20px
}

#tripInfoTitle p{
  font-size: large;
  font-weight: bold;
}

#formTripInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

#submitButton{
  display:flex;
  justify-content: center;
  margin-top: 40px;
}

#palmUpIconImage{
  width: 35px;
  height: 35px;
}

#calculator{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}

#resultCalculated{
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  justify-content: center;
}

#warningCardContainer{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

#tripResultContainer{
  width: 100%;
  margin-inline-end: 20px;
}

#noResultCalculated{
  font-size: 24px;
}

</style>