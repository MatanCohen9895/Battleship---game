

JsubmarinesArr = {
    submarinesArr1: [size = 2, amount = 2],
    submarinesArr2: [size = 3, amount = 3],
    submarinesArr3: [size = 4, amount = 2],
    submarinesArr4: [size = 5, amount = 1]
}
afterstringfy = JSON.stringify(JsubmarinesArr);
localStorage["JsubmarinesArr"] = afterstringfy;

score1 = 0; total1 = 0;
score2 = 0; total2 = 0;

//Function thats return random numb between 0-3.
function getrand() {
    var rand = Math.floor(Math.random() * 4);

    return rand;
}

//Function build subs array and update and check the locations of cells in the game table.
function buldsubarray(submarinesArrw, randn, subindexarr, k, index, rows, cols, rowsarr, i, flag) {

    for (var u = 0; u < 5000; u++) {
        if (submarinesArrw.submarinesArr1[randn + 1] == 0)
            randn = getrand();
        else
            break;
    }
    if (randn == 0 && submarinesArrw.submarinesArr1[1] != 0) {
        if (rowsarr[i][1] == index)
            index = index - 2;
        if (rowsarr[i][2] == rows - 1)
            index = index - cols * 3;
        if (flag == 0)
            subindexarr[k] = [index, index + 1];
        else
            subindexarr[k] = [index, index + cols];
        submarinesArrw.submarinesArr1[1]--;
        k++;

    }
    if (randn == 1 && submarinesArrw.submarinesArr2[1] != 0) {
        if (rowsarr[i][1] == index)
            index = index - 3;
        if (rowsarr[i][2] == rows - 1)
            index = index - cols * 4;
        if (flag == 0)
            subindexarr[k] = [index, index + 1, index + 2];
        else
            subindexarr[k] = [index, index + cols, index + (cols * 2)];
        submarinesArrw.submarinesArr2[1]--;
        k++;

    }
    if (randn == 2 && submarinesArrw.submarinesArr3[1] != 0) {
        if (rowsarr[i][1] == index)
            index = index - 4;
        if (rowsarr[i][2] == rows - 1)
            index = index - cols * 5;
        if (flag == 0)
            subindexarr[k] = [index, index + 1, index + 2, index + 3];
        else
            subindexarr[k] = [index, index + cols, index + (cols * 2), index + (cols * 3)];
        submarinesArrw.submarinesArr3[1]--;
        k++;

    }
    if (randn == 3 && submarinesArrw.submarinesArr4[1] != 0) {
        if (rowsarr[i][1] == index)
            index = index - 5;
        if (rowsarr[i][2] == rows - 1)
            index = index - cols * 6;
        if (flag == 0)
            subindexarr[k] = [index, index + 1, index + 2, index + 3, index + 4];
        else
            subindexarr[k] = [index, index + cols, index + (cols * 2), index + (cols * 3), index + (cols * 4)];
        submarinesArrw.submarinesArr4[1]--;
        k++;

    }
    return k;

}

//function check width length
function randomwidthlengh() {
    let ra = (Math.random() >= 0.5) ? 1 : 0;

    return ra;
}

//The function colored the cells with the same id from subindexarr on our borad to black.
function updatemarine(subindexarr) {
    let id = "";
    for (var d = 0; d < subindexarr.length; d++) {
        for (var z = 0; z < subindexarr[d].length; z++) {
            id = subindexarr[d][z];
            document.getElementById(id).classList.add("sub");
        }

    }



}

//function thats change color cells when we click on mouse event, on the computer board to red/gray and update the score. 
function colorupdate(colorkey, subindex) {
    if (score1 >= total2) {
        alert("You Win!!");
        location.reload();
    }
    flag = false;
    for (var i = 0; i < subindex.length; i++) {

        for (var j = 0; j < subindex[i].length; j++) {

            if (subindex[i][j] == colorkey) {

                document.getElementById(subindex[i][j].toString()).className = "red";
                score1++;
                hits[hitsindex] = colorkey;
                hitsindex++;


                flag = true;
            }


        }

    }
    if (!flag) {

        document.getElementById(colorkey.toString()).className = "gray";
        miss[missindex] = colorkey;
        missindex++;
    }

}
//function expose enemy submarine
function cheat() {
    updatemarine(subindexarr1);
}
//function thats change color cells in random id, on the user board to red/gray and update the score. 
function getlocateindex(subixarr, indexx) {
    if (score2 >= total1) {
        alert("Computer Win!!");
        location.reload();
    }
    flag = false;
    for (var i = 0; i < subixarr.length; i++) {

        for (var j = 0; j < subixarr[i].length; j++) {
            if (subixarr[i][j] == indexx) {

                document.getElementById(subixarr[i][j].toString()).className = "red";
                score2++;
                hits[hitsindex] = subixarr[i][j];
                hitsindex++;


                flag = true;
            }

        }

    }
    if (!flag) {
        document.getElementById(indexx.toString()).className = "gray";
        miss[missindex] = indexx;
        missindex++;
    }

}
//game function that start to work on mouse events.
function game(ourmove) {
    var rand = Math.floor(Math.random() * (rows * cols));
    colorupdate(ourmove, subindexarr1);
    getlocateindex(subindexarr, rand);
    document.getElementById("score_1").innerHTML = score1;
    document.getElementById("score_2").innerHTML = score2;

}
//function update the total array
function updatetotal(totalarray) {
    total = [];
    checker = [];
    tmp1 = 0;
    tmp2 = 0;

    for (var i = 0; i < totalarray.length; i++) {

        for (var j = 0; j < totalarray[i].length; j++) {
            checker[tmp2++] = totalarray[i][j];

        }

    }

    for (var i = 0; i < totalarray.length; i++) {

        for (var j = 0; j < totalarray[i].length; j++) {
            total[tmp1] = 0;
            for (var v = 0; v < checker.length; v++) {
                if (totalarray[i][j] == checker[v])
                    total[tmp1]++;

            }
            tmp1++;


        }

    }
    return total.length;
    //function that save the game in the loclastorage
} function savegame() {

    gamesave = {
        hits: hits,
        miss: miss,
        score1: score1,
        score2: score2,
        subindexarr: subindexarr,
        subindexarr1: subindexarr1,
        str: str,
        str1: str1
    }
    gamestring = JSON.stringify(gamesave);
    localStorage["gamesave"] = gamestring;
}
//function that reload the game from the loclastorage
function reloadlastgame() {
    if (localStorage["JsubmarinesArr"] != undefined)
        Jgamesave = JSON.parse(localStorage["gamesave"]);


    document.getElementById("ph").innerHTML = Jgamesave.str;
    document.getElementById("ph2").innerHTML = Jgamesave.str1;
    updatemarine(Jgamesave.subindexarr);
    total1 = updatetotal(Jgamesave.subindexarr);
    total2 = updatetotal(Jgamesave.subindexarr1);
    console.log(Jgamesave.subindexarr);
    console.log(Jgamesave.subindexarr1);
    hitsindex = Jgamesave.hits.length + 1;
    missindex = Jgamesave.miss.length + 1;
    hits = Jgamesave.hits;
    miss = Jgamesave.miss;
    score1 = Jgamesave.score1;
    score2 = Jgamesave.score2;
    subindexarr = Jgamesave.subindexarr;
    subindexarr1 = Jgamesave.subindexarr1;
    for (var i = 0; i < Jgamesave.hits.length; i++) {
        document.getElementById(hits[i].toString()).className = "red";
    }
    for (var i = 0; i < Jgamesave.miss.length; i++) {
        document.getElementById(miss[i].toString()).className = "gray";
    }

}
