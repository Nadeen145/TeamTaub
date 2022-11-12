
import {plansList} from '../data/data.js'

function navigateToBillingCyclePage(planNumber){
    document.location.href = 'pages/billing_cycle.html';
    sessionStorage.setItem('planName', plansList[planNumber].name.toString());
    sessionStorage.setItem('planMonthlySubPrice', plansList[planNumber].monthlySubPrice.toString());
    sessionStorage.setItem('planYearlySubPrice', plansList[planNumber].yearlySubPrice.toString());
}

function buildTableHeader(table, table_row){
    for (let j = 0; j < 4; j++) {
        let td = document.createElement('th');
        switch (j) {
            case 0:
                td.appendChild(document.createTextNode(""));
                break;
            case 1:
                td.appendChild(document.createTextNode(plansList[0].name));
                td.setAttribute('id', "plan_1");
                break;
            case 2:
                td.appendChild(document.createTextNode(plansList[1].name));
                td.setAttribute('id', "plan_2");
                break;
            case 3:
                td.appendChild(document.createTextNode(plansList[2].name));
                td.setAttribute('id', "plan_3");
                break;
            default:
                break;
        }
        table_row.appendChild(td);
    }
    table.appendChild(table_row);
}

function buildTableButton(table, table_row){
    for (let j = 0; j < 4; j++) {
        let td = document.createElement('td');
        let btn = document.createElement('button');
        switch (j) {
            case 0:
                td.appendChild(document.createTextNode(""));
                break;
            case 1:
                btn.appendChild(document.createTextNode(plansList[0].yearlySubPrice + "$"));
                btn.setAttribute('id', "btn_plan_1");
                btn.setAttribute('class', 'btn_table');
                btn.onclick = () => navigateToBillingCyclePage(0);
                td.appendChild(btn);
                break;
            case 2:
                btn.appendChild(document.createTextNode(plansList[1].yearlySubPrice + "$"));
                btn.setAttribute('id', "btn_plan_2");
                btn.setAttribute('class', 'btn_table');
                btn.onclick = () => navigateToBillingCyclePage(1); 
                td.appendChild(btn);
                break;
            case 3:
                btn.appendChild(document.createTextNode(plansList[2].yearlySubPrice + "$"));
                btn.setAttribute('id', "btn_plan_3");
                btn.setAttribute('class', 'btn_table');
                btn.onclick = () => navigateToBillingCyclePage(2);
                td.appendChild(btn);
                break;
            default:
                break;
        }
        table_row.appendChild(td);
    }
    table.appendChild(table_row);
}

function buildTableFeatures(index, table_row, str){
    let td = document.createElement('td');
    switch (index) {
        case 1:
            str = "Games Count";
            break;

        case 2:
            str = "Coins";
            break;

        case 3:
            str = "Special Avatar";
            break;

        case 4:
            str = "T-Shirt";
            break;

        case 5:
            str = "Customer Care";
            break;

        default:
            break;
    }
    td.setAttribute('class', 'feature_name nobr');
    td.appendChild(document.createTextNode(str));
    table_row.appendChild(td);
}

function buildTableContent(index, table_row, str){
    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');

        switch (index) {
            case 1:
                str = plansList[j-1].gamesCount;
                break;

            case 2:
                str = plansList[j-1].coins;
                break;

            case 3:
                str = plansList[j-1].specialAvatar;
                break;

            case 4:
                str = plansList[j-1].tShirt;
                break;
    
            case 5:
                str = plansList[j-1].customerCare;
                break;
    
            default:
                break;
        }

        if(str == true){
            str = "✔";
            td.setAttribute('style', 'color: #00FF00');            
        } 
        if(str == false){
            str = "❌";
        }

        td.appendChild(document.createTextNode(str));            

        switch (j) {
            case 1:
                td.setAttribute('class', 'col_1');
                break;
            
            case 2:
                td.setAttribute('class', 'col_2');
                break;    
            
            case 3:
                td.setAttribute('class', 'col_3');
                break;               

            default:
                break;
        }
        table_row.appendChild(td);
    }
}

function tableCreate() {
    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');
    tbl.setAttribute('class', 'center');

    for (let i = 0; i <= 6; i++) {

        let tr = document.createElement('tr');

        // Table Header
        if(i == 0){
            buildTableHeader(tbl, tr);
            continue;
        }

        // Table Button
        if(i == 6){
            buildTableButton(tbl, tr);
            continue;
        }

        // Table Features
        let str = "";
        buildTableFeatures(i, tr, str);

        // Table Content
        buildTableContent(i, tr, str);

      tbl.appendChild(tr);

    }    

    body.appendChild(tbl)
}

tableCreate();
