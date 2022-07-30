const generateGraphData = (buys) => {

        let gdata = [0,0,0,0,0,0,0,0,0,0,0,0]

        const graphdata = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                data: gdata,
                },
            ],
        };    
    
        for (let i in buys){
        const currendata = []
        const pos = Number(i) + 1
        const purchaseid = buys[i]._id
        
        const month = Number(buys[i].date.slice(5,7))
        const currentyear = new Date()

        if (Number(buys[i].date.slice(0,4)) == currentyear.getFullYear() ){
            for (let x in graphdata.labels){
                if (month == (Number(x)+1)){
                    gdata[x] = gdata[x] + buys[i].price
                }
            }
        }
    }

    return graphdata;
    
}

const generatePieChartData = ( data) => {

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
                //                console.log('Existing category') 
                    const theIndex = titleIndex(pfutdata, data[i].category)           
                    pfutdata[theIndex].value = pfutdata[theIndex].value + data[i].price
                    //console.log(pfutdata[theIndex])
                }
            else{
                //console.log('New category')
                pfutdata.push({title: data[i].category, value: data[i].price, color: randColorGen()})                
            } 
        }}

        return pfutdata
}

export {generateGraphData, generatePieChartData};
