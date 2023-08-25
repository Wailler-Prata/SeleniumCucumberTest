
const functionsDevFinance = {
    convertStringNumberTo(number){
        const resultCaracteres = number.replace(',', '.').match(/-|[0-9|.|,]/g).join('') 
        return {
            float(){ return Number.parseFloat(resultCaracteres) },
            integer(){ return Number.parseInt(resultCaracteres) }
        }                
    },
    convertTextDateToRightFormatForBrowser(text){
        const dateSplitted = text.split("/")
        return dateSplitted[2] + '-' + dateSplitted[1] + '-' + dateSplitted[0]
    }
}
module.exports = functionsDevFinance