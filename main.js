function wordify(int) {
    let dest = document.querySelector("body")
    let num_string = ''
    let ones = ['one','two','three','four','five','six','seven','eight','nine']
    let teens = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen',
        'seventeen','eighteen','nineteen']
    let tens = ['ten','twenty','thirty','fourty','fifty','sixty','seventy',
        'eighty','ninety']
    
    
    

    for(let i=1; i<=int; i++) {
        const index_str = i.toString()
        if(index_str.length==1){
            num_string+= ones[i-1]+', '
        } else if(index_str.length==2){
            if(index_str[1]==0) {
                num_string+=tens[i/10-1]+', '
            } else if(index_str[0]=='1'){
                num_string+=teens[i-11]+', '
            } else if(index_str[0]!='1'){
                const tens_place = parseInt(index_str[0])
                num_string+=tens[tens_place-1]+'-'+ones[i-tens_place*10-1]+', '
            }
        } else if(index_str.length==3){
            if(index_str[2]==0 && index_str[1]==0){
                num_string+=ones[parseInt(index_str[0])-1]+' hundred, '
            } else if(index_str[2]==0) {
                num_string+=ones[parseInt(index_str[0])-1]+' hundred '+tens[parseInt(index_str[1])-1]+', '
            } else if(index_str[1]==0) {
                num_string+=ones[parseInt(index_str[0])-1]+' hundred'+' '+ones[parseInt(index_str[2])-1]+', '
            } else if(index_str[1]==1){
                num_string+=ones[parseInt(index_str[0])-1]+' hundred'+' '+teens[parseInt(index_str[2])-1]+', '
            } else if(index_str[1]!=1 && index_str[1]!=0) {
                num_string+=ones[parseInt(index_str[0])-1]+' hundred'+' '+tens[parseInt(index_str[1])-1]+'-'+ones[parseInt(index_str[2])-1]+', '
            }
        } else {
            num_string+='one thousand'
        }
    }
        

    let newDiv = document.createElement("div")
    let text = document.createTextNode(num_string)
    newDiv.appendChild(text)
    dest.appendChild(newDiv)
    
}
wordify(1000)