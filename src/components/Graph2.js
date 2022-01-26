
import Chart from "react-apexcharts";
import axios from 'axios';


import React, {useState, useEffect} from 'react';


function Charts() {

	var es = require("apexcharts/dist/locales/es.json")

 	var themeLay = "white"

	  const[montoIngresos, setMontoIngresos]= useState([]);
	  const[fechaIngresos, setFechaIngresos]= useState([]);
	  const[montoEgresos, setMontoEgresos]= useState([]);
	  const[fechaEgresos, setFechaEgresos]= useState([]);
	  const[data, setData]= useState([]);

	  const state = [
	  	{
	   		name: "ingresos",
	    		data: montoIngresos
	    		
	  	},
	  	{
	   		name: "egresos",
	    		data: montoEgresos
	    		
	  	}
	  ]


const options= {
	colors: ["#00FFC5","#FF00C1"],
	chart: {

		locales: [es],
    	defaultLocale: 'es',
    	id: 'area-datetime',
        type: 'area',
        height: 350
    },
    dataLabels: {
          	enabled: false
    },
   fill: {
     	type: "gradient",
     	colors: ["#00FFC5","#FF00C1"],
     	gradient: {
      		shadeIntensity: 0,
       		 opacityFrom: 0.8,
      		 opacityTo: 0.0,
       		 stops: [0, 100]
     	 }
   	},
    animations: {
        enabled: true
    },
     markers: {
        size: 3,
        hover: {
        	size: 9
        }
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        tickAmount: 4,
        floating: false,
        labels: {
        	style: {
            	colors: '#8e8da4',
        	},
            	offsetY: -7,
          	  	offsetX: 0,
         },
         axisBorder: {
           	show: false,
          },
         axisTicks: {
            show: false
         }
    },
     stroke: {
		width: 2.5
     },
      responsive: [
	    {
	      breakpoint: "300",
	      options: {
	        plotOptions: {
	          bar: {
	            horizontal: true
	          }
	        },
	        legend: {
	          position: "bottom"
	        }
	      }
	    }
	  ],
	dataLabels: {
		  enabled: false,
		  enabledOnSeries: undefined,
		  formatter: function (val, opts) {
		      return val
		  },
		  textAnchor: 'middle',
		  distributed: false,
		  offsetX: 0,
		  offsetY: 0,
		  style: {
		      fontSize: '14px',
		      fontFamily: 'Helvetica, Arial, sans-serif',
		      fontWeight: 'bold',
		      colors: ["#000","#fff"]
		  },
		background: {
			enabled: true,
			foreColor: '#fff',
			padding: 4,
			borderRadius: 2,
			borderWidth: 1,
			borderColor: '#fff',
			opacity: 0.9,
			dropShadow: {
				enabled: false,
		    	top: 1,
		    	left: 1,
		    	blur: 1,
		   		color: '#000',
		   		opacity: 0.45
		   	},
	  	}
	},
	grid: {
	    show: false,
	    borderColor: '#000',
	    strokeDashArray: 0,
	    position: 'back',
	    xaxis: {
	        lines: {
	            show:true
	        }
	    },   
	    yaxis: {
	        lines: {

	            show: true
	        }
	    },  
	    row: {
	        colors: "#fff",
	        opacity: 0
	    },  
	    column: {
	        colors: "#fff",
	        opacity: 0
	    },  
	    padding: {
	        top: 0,
	        right: 0,
	        bottom: 0,
	        left: 0
	    },  
	},
	 legend: {
      show: true,
      showForSingleSeries:false,
      showForNullSeries: true,
      showForZeroSeries: false,
      position: 'top',
      horizontalAlign: 'left', 
      floating:false,
      fontSize: '7px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
          colors: "#fff",
          useSeriesColors: themeLay
      },
      markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: '#fff',
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
      itemMargin: {
          horizontal: 5,
          vertical: 0
      },
      onItemClick: {
          toggleDataSeries: true
      },
      onItemHover: {
          highlightDataSeries: true
      },
    },
    noData: {
	  text: "No hay datos para mostrar",
	  align: 'center',
	  verticalAlign: 'middle',
	  offsetX: 0,
	  offsetY: 0,
	  style: {
	    color: "#fff",
	    fontSize: '20px',
	    fontFamily: undefined
	  }
	},
	 theme: {
      mode: themeLay, 
      palette: '#008FFB', 
      monochrome: {
          enabled: false,
          color: '#fff',
          shadeTo: 'light',
          shadeIntensity: 0.65
      },
	 },
	   xaxis: {
      type: 'datetime',
      categories: [],
      tickAmount: undefined,
      tickPlacement: 'between',
      min: undefined,
      max: undefined,
      range: undefined,
      floating: false,
      decimalsInFloat: undefined,
      overwriteCategories: undefined,
      position: 'bottom',
      labels: {
          show: false,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: false,
          showDuplicates:false,
          trim: false,
          minHeight: undefined,
          maxHeight: 50,
          style: {
              colors: undefined,
              fontSize: '7px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
          formatter: undefined,
          datetimeUTC: true,
          datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'HH:mm',
          },
      },
      axisBorder: {
          show: false,
          color: '#000',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#000',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
	},
	 yaxis: {
      show:true,
      showAlways: false,
      showForNullSeries: false,
      
      opposite: false,
      reversed: false,
      logarithmic: false,
      logBase: 10,
      tickAmount: 6,
    
      forceNiceScale: true,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
          show: false,
          align: 'right',
          minWidth: 0,
         maxWidth: 50,
          style: {
              colors: ['#000'],
              fontSize: '7px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 50,
              cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value) => { return  "$" +new Intl.NumberFormat().format(value) },
      },
    
  },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: true,
      custom: undefined,
      fillSeriesColor: false,
      theme: true,
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
          highlightDataSeries: true,
      },
      x: {
          show: true,
          format: 'MMM yy',
          formatter: undefined,
      },
      y: {
      	  show: true,
          formatter: undefined,
          format: '',
          title: {
              formatter: (seriesName) => seriesName,
          },
      },
      z: {
          formatter: undefined,
          title: 'Size: '
      },
      marker: {
          show: true,
      },
      // items: {
      //    display: "inblock",
      // },
      fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
      },
  }

};

	const PeticionApiIngresos = async()=> {
		await axios.post('http://pruebaparaapi.herokuapp.com/api/ingresos/fecha',{
			"id":"3",
			"fechaInicio":"19800601",
			"fechaFin":"20500731"
		})
		.then(response=>{
    	let respuesta = response.data;
   		let auxFechaIngresos=[];
   		let auxMontoIngresos = []
    	respuesta.map(elemento=>{
   			let arr = new Array(new Date(elemento.fecha).getTime(),elemento.monto)
   			auxMontoIngresos.push(arr)
   		});
    	setMontoIngresos(auxMontoIngresos);
    	})
	}


 	const PeticionApiEgresos = async()=> {
		await axios.post('http://pruebaparaapi.herokuapp.com/api/egresos/fecha',{
		"id":"3",
		"fechaInicio":"19800601",
		"fechaFin":"20500731"
		})
			.then(response=>{
    		let respuesta = response.data;
   			let auxFechaEgresos=[];
   			let auxMontoEgresos = []
    		respuesta.map(elemento=>{
   				let arr = new Array(new Date(elemento.fecha).getTime(),elemento.monto)
   				auxMontoEgresos.push(arr)
   			});
    		setMontoEgresos(auxMontoEgresos);
   		})
	}

 	useEffect(()=>{
  		PeticionApiEgresos();
 		PeticionApiIngresos();
	}, [])



	return (
		<div>
  			<div style={{ width: "100%",height:"200px", margin:"0"}}>
  		
          		<Chart
              		options={options}
              		series={state}
              		type="area"
              		height="200"
              		
              		width="110%"
              		min-width="150px"
     		  		key={0}
     		  	></Chart>
          		
       		</div>
    	</div>
    );
  
}

export default Charts;
