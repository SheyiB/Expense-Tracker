import { PieChart } from 'react-minimal-pie-chart';


const randColorGen = () => {
    const list = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let color = '';

    while (color.length < 6){
        color = color + String(list[Math.floor(Math.random() * list.length)]);
    }

    return ('#'+color)
}

function existsInArray(array, item){
        let status = false
        for(let i in array){
            if(array[i].title == item){
                status = true
            }
        }
        return status

}
function titleIndex( myarray, category) {
    let index = -1                
    for(let y in myarray){
        if (myarray[y].title == category) { index = y }
        }
    return index
}

const PChart = ({data}) => {

const pfutdata = []

for(let i in data){
    let categories = []

    for(let q in pfutdata){
        categories.push(pfutdata[q].title)
    }
   
    if (pfutdata.length == 0 ){
     //   console.log('Initial category')        
        pfutdata.push({title: data[i].category, value: data[i].price, color: randColorGen()})    
    }

    else{
        if( existsInArray(pfutdata, data[i].category) ) {       
//            console.log('Existing category') 
            const theIndex = titleIndex(pfutdata, data[i].category)           
            pfutdata[theIndex].value = pfutdata[theIndex].value + data[i].price
                //console.log(pfutdata[theIndex])
            }
        else{
            //console.log('New category')
            pfutdata.push({title: data[i].category, value: data[i].price, color: randColorGen()})
                
        } 
    
    }}

 //console.log('Final Result : ',pfutdata)
    
    const piedata = [
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]

    return (
        <>
        <h1> PieChart of Spendings</h1>

        <PieChart  data={pfutdata} 
        label={(data) => data.dataEntry.title}
        labelPosition={65}
        labelStyle={{ fontSize: "5px", fontColor: "FFFFFA", fontWeight: "200", }}
        />;
        </>
    )
}

export default PChart