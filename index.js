let class_count = 0
function click_button(){
    document.getElementById("make_input").innerHTML = "";
    class_count = document.getElementById("class_count").value;
    document.getElementById("class_count").value = "";
    for(let i=0;i<parseInt(class_count);i++){
        let label = document.createElement("label");
        label.textContent = `${i + 1}`;
        document.getElementById("make_input").appendChild(label);

        let newinput = document.createElement("input");
        newinput.type = "text";
        newinput.id = `input${i + 1}`;
        document.getElementById("make_input").appendChild(newinput);
        let newbr = document.createElement("br");
        document.getElementById("make_input").appendChild(newbr);
    document.getElementById("first_button").style.display = "none";
}}

function get_data(){
    let number_data = document.getElementById("get_data").value;
    let data = document.getElementById(`input${number_data}`).value;
    document.getElementById("got_data").innerText = data;
}

function loop(){
    let data = 0;
    let best_data = 0;
    let low_data = Infinity;
    if(class_count > 0){
        for(let i=1;i<=class_count;i++){
            let now_data = parseFloat(document.getElementById(`input${i}`).value);
            if (!isNaN(now_data)){
                data += now_data;
                if(best_data<now_data){
                    best_data = now_data;
                }if(low_data>now_data){
                    low_data = now_data;
                }
            }
        }
        heikin_data = data/parseFloat(class_count)
        document.getElementById("heikin").innerText = `平均点:${heikin_data} 最高点:${best_data} 最低点:${low_data}`;
    }
}

function main(){
    setInterval(loop,250);
}


main();
