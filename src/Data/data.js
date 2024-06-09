import logo from "../assets/logo.png"
import Afghanistan from "../assets/flags/Flag_of_Afghanistan_Flat_Round-1024x1024.png"
import Bangladesh from "../assets/flags/Flag_of_Bangladesh_Flat_Round-1024x1024.png"
import Haiti from "../assets/flags/Flag_of_Haiti_Flat_Round-1024x1024.png"
import Palestine from "../assets/flags/Flag_of_Palestine_Flat_Round-1024x1024.png"
import Somalia from "../assets/flags/Flag_of_Somalia_Flat_Round-1024x1024.png"
import Turkey from "../assets/flags/Flag_of_Turkey_Flat_Round-1024x1024.png"
import Ukraine from "../assets/flags/Flag_of_Ukraine_Flat_Round-1024x1024.png"







export  const kriesen = [
    {name:"Alle", id: "0"  },
    {name:"Kriegsgebiete", id: "1"},
    {name:"Erdbeben", id: "2"},
    {name:"Überschwemmungen", id: "3"},
    {name:"Hungersnöte", id: "4"},
    {name:"Epidemien", id: "5"},
   
  ];
  

  export const areas = [
    {
      id: "1",
      name: "palestinia",
      kriese : kriesen[1],
      flage : Palestine,
    },
    {
      id: "2",
      name: "Ukraina",
      kriese : kriesen[1],
      flage : Ukraine,
    },
    {
      id: "3",
      name: "Afganistan",
      kriese : kriesen[1],
      flage : Afghanistan,
    },
    {
      id: "4",
      name: "Haiti",
      kriese : kriesen[2],
      
      flage : Haiti,
    },
    {
      id: "8",
      name: "Türkei",
      kriese : kriesen[2],
      
      flage : Turkey,
    },
    {
      id: "7",
      name: "Bangladesch",
      kriese : kriesen[3],
      
      flage : Bangladesh,
    },
    {
      id: "6",
      name: "Somalia",
      kriese : kriesen[4],
      
      flage : Somalia,
    },
    
  ];


  export const categories = [
    {name: "Herren", id: "1"  },
    {name: "Damen", id: "2" },
    {name: "Kinder", id: "3" }
  ];

 export  function getCategoryById (id)  {
    return categories.find(element => element.id === id);
  };

  export const clothesArts = [

    {id:"0", name: "T-Shirt", types: ["1", "2", "3"], sizes : ["S", "M", "L", "XL"]},
    {id:"1",name: "Jeans", types: ["1", "2", "3"], sizes : ["S", "M", "L", "XL"]},
    {id:"2",name: "Hosa", types: ["1", "2", "3"], sizes : ["26", "28", "30", "32", "34","36"]},
    {id:"3",name: "Kleid", types: [ "2", "3"], sizes : ["S", "M", "L", "XL"]},
    {id:"4",name: "Rock", types: [ "2"], sizes : ["S", "M", "L", "XL"]},
    {id:"5",name: "Mütze", types: ["1", "2", "3"], sizes : ["S", "M", "L", "XL"]},
    {id:"6",name: "Hemd", types: ["1", "2"], sizes : ["S", "M", "L", "XL"]},
    {id:"7",name: "Schuhe", types: ["1"], sizes : ["39","40", "41", "42", "43", "44", "45", "46"]},
    {id:"8",name: "Schuhe", types: ["2"], sizes : ["36", "37", "38", "39", "40"]},
    {id:"9",name: "Schuhe", types: ["3"], sizes : ["22", "23", "25", "26", "27", "28", "29"]},

  ];

  export  function getClothesArtById (id)  {
    return clothesArts.find(element => element.id === id).name;
  };


  export function getCatigoriesByType (type = "1"){
   return categories.filter((category)=>  category.types.includes (type) );
  }