export default function Alerts(props) {
let minComplexity = 30;
let maxComplexity = 50;
let alarmita = 0;

if (props.name === 'GDAXI.INDX') {
  minComplexity = 4e8
  maxComplexity = 4.3e8
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
} else if (props.name === 'SHE') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
} else if (props.name === 'XAU.INDX') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}else if (props.name === 'NDX.INDX') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}else if (props.name === 'N225.INDX') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}else if (props.name === 'GSPC.INDX') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}else if (props.name === 'FTSE.INDX') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}else if (props.name === 'FCHI.INDX') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}else if (props.name === 'BTC-USD.CC') {
  minComplexity = 3.1e7
  maxComplexity = 3.1e7
  if (props.complexities < minComplexity) {
    alarmita = 0
  } else if (props.complexities > maxComplexity) {
    alarmita = 2
  } else {
    alarmita = 1
  }
}

const styles = {
  backgroundColor:
    props.complexities < minComplexity
      ? '#7CCA63'
      : props.complexities > maxComplexity
      ? '#ED3535'
      : '#DFC04C',
};

    return(
        <>
        <div className="alert--container">
            <p className="ticker--name">{props.name}</p>
            <div style={styles} className="alarm"> {alarmita}</div>
        </div>
        </>
    )
}

// Necesito generar un componenente reusable que use los valores de un JSON y cree
// X cantidad de componentes y sus respectivos nombres. 

// Despues dependiendo del valor leido aplique estilos para informar de que tipo de 
// alarma se trata.