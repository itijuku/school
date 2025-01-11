let class_count = 0;
let rank = [];
let now = 0;

function click_button(){
    class_count = document.getElementById("class_count").value;
    if(!isNaN(class_count)){
        document.getElementById("make_input").innerHTML = "";
        document.getElementById("class_count").value = "";
        for(let i=0;i<parseInt(class_count);i++){
            let label = document.createElement("label");
            label.textContent = `${i + 1}`;
            label.id = `label${i + 1}`
            document.getElementById("make_input").appendChild(label);

            let newinput = document.createElement("input");
            newinput.type = "text";
            newinput.id = `input${i + 1}`;
            document.getElementById("make_input").appendChild(newinput);
            let newbr = document.createElement("br");
            document.getElementById("make_input").appendChild(newbr);
        document.getElementById("first_button").style.display = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("div").style.display = "block";
        }
    }else{
        document.getElementById("error").innerText = "数字を入力してください";
    }
}

function get_data(){
    let number_data = document.getElementById("get_data").value;
    let data = document.getElementById(`input${number_data}`).value;
    document.getElementById("got_data").innerText = data;
}

function narabikae_hight(a,b){
    return b.data - a.data;
}

function narabikae_low(a,b){
    return a.data - b.data;
}

function narabikae_normal(a,b){
    return a.number - b.number;
}

function set_normal(){
    get_now_data()
    rank.sort(narabikae_normal);
    for(let i = 1;i<=class_count;i++){
        document.getElementById(`input${i}`).value = rank[i-1].data;
        document.getElementById(`label${i}`).innerText = `${rank[i-1].number}`;
    }
}

function set_rank_hight(){
    get_now_data()
    rank.sort(narabikae_hight);
    for(let i = 1;i<=class_count;i++){
        document.getElementById(`input${i}`).value = rank[i-1].data;
        document.getElementById(`label${i}`).innerText = `${rank[i-1].number}`;
    }
}

function set_rank_low(){
    get_now_data()
    rank.sort(narabikae_low);
    for(let i = 1;i<=class_count;i++){
        document.getElementById(`input${i}`).value = rank[i-1].data;
        document.getElementById(`label${i}`).innerText = `${rank[i-1].number}`;
    }
}

function get_now_data(){
    rank.length = 0;
    for(let i=1;i<=class_count;i++){
        let now_data = parseFloat(document.getElementById(`input${i}`).value);
        let now_number = document.getElementById(`label${i}`).innerText
        if (!isNaN(now_data)){
            rank.push({data:now_data,number:now_number})
        }else{
            rank.push({data:"",number:now_number})
        }
    }
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
        heikin_data = data/parseFloat(class_count);
        document.getElementById("heikin").innerText = (
        `平均点:${heikin_data} 最高点:${best_data} 最低点:${low_data}`
        );
        
    }
}

function main(){
    setInterval(loop,250);
}

main();

// let rank = [{data:3,number:1},{data:1,number:2},{data:2,number:3}]
// rank.sort(narabikae)
// console.log(rank)