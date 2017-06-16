import 'fetch-everywhere';
import FixedData from './fixeddata.js'

export const resolvers = {
  Query: {
    Pages: () => {
      return FixedData.pages;
    },
    RestAPI: () => {
      const jsonFortune = fetch('http://www.yerkee.com/api/fortune')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(fortune) {
            var randomFortune = [{
              name: fortune.fortune
            }]
            return randomFortune;
        });

        return jsonFortune;
    },
    Pizzas: () => {
      return FixedData.pizzas;
    },
    Drycleaning: () => {
      return FixedData.drycleaning;
    },
    Assistant: () => {
      var AssistantTasks = [];

      AssistantTasks = [
        {
          pizza: FixedData.pizzas,
          drycleaning: FixedData.drycleaning
        }
      ];

      return AssistantTasks;
    }
  }
};
