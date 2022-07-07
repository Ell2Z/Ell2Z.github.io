document.write('<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>')
$(function(){

    function initTitle(item,index,arr){

    }

    function initTable(name,subjects,scores){
        var notify = document.getElementById("notify-name");
        var infoFill = document.getElementById("info-fill");
        notify.innerText= name;
        infoFill.style.display = "none";
        var tableScore = document.getElementById("container-table");
        var show = document.createElement('table');
        var row = show.insertRow(0);
        var row1 = show.insertRow(1);
        // 根据科目数量生成表格
        for (let index = 0; index < 5; index++) {
            const subject = subjects[index];
            const cell = row.insertCell(index);
            cell.style.cssText="border-bottom: #4a4a4a;border-bottom-style:solid;"
            cell.innerHTML = subject;
            const score = scores[index];
            const cell1 = row1.insertCell(index);
            cell1.innerHTML = score;
        }
        show.style.cssText= "width: 70%;margin-right: 15%; margin-left: 15%;font-size: 23px;box-shadow: 2px 3px 0px var(--bs-body-bg);border-radius: 19px;";
        tableScore.appendChild(show);
    }

    $('#submitButton').click(function(e) {
        // $(this).prop('disabled', true);
        e.preventDefault();

        var selected = $("input[type='number'][name='number']").val();
        var selectedName = $("input[type='text'][name='name']").val();

        switch(selected + selectedName){
            case "1宋家颖":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[98,49,100,50,46]);
	break;
case "2张浩阳":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[58,46,12,25,22]);
	break;
case "3张静雯":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[79,46,76,40,23]);
	break;
case "4曹奥雪":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[91,45,93,50,50]);
	break;
case "5曹莉姣":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[95,46,83,40,47]);
	break;
case "6李妙晨":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[95,44,96,45,50]);
	break;
case "7李梓汐":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[92,46,96,50,50]);
	break;
case "8梁子一":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[96,46,85,50,46]);
	break;
case "9梁明桐":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[96,46,84,30,41]);
	break;
case "10梁雨萱":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[87,46,86,50,40]);
	break;
case "11武新菊":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[95,46,54,45,50]);
	break;
case "12江志清":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[93,46,97,40,43]);
	break;
case "13江雨寒":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[82,40,66,25,27]);
	break;
case "14王以科":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[87,46,87,50,40]);
	break;
case "15王欣林":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[100,45,91,50,46]);
	break;
case "16范云瞻":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[96,46,83,50,50]);
	break;
case "17范云萍":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[93,45,97,35,50]);
	break;
case "18范国硕":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[92,47,90,50,44]);
	break;
case "19范恒熙":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[96,47,95,50,43]);
	break;
case "20范林硕":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[84,45,89,45,36]);
	break;
case "21范树泉":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[92,45,95,40,42]);
	break;
case "22范沐萱":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[100,45,94,50,43]);
	break;
case "23范浩然":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[23,30,30,35,23]);
	break;
case "24范玉莹":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[89,45,82,45,43]);
	break;
case "25范荣欣":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[98,43,98,45,50]);
	break;
case "26范菁菁":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[91,44,89,40,46]);
	break;
case "27范菲菲":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[68,43,58,35,27]);
	break;
case "28范雨彤":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[88,45,76,45,37]);
	break;
case "29范雪茹":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[75,44,63,40,27]);
	break;
case "30许芸熙":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[81,43,63,40,38]);
	break;
case "31赵晨茜":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[98,46,96,50,50]);
	break;
case "32赵浩然":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[92,44,98,50,50]);
	break;
case "33陈冲":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[97,45,97,50,43]);
	break;
case "34马云飞":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[25,38,45,20,22]);
	break;
case "35黄发宇":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[96,48,92,50,37]);
	break;
case "36黄若微":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[99,46,94,50,50]);
	break;
case "37王一诺":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[97,47,97,50,46]);
	break;
case "38范洪昭":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[91,45,96,50,39]);
	break;
case "39贾友瑞":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[95,46,85,35,35]);
	break;
case "40贾蓝雯":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[98,47,96,35,50]);
	break;
case "41黄可欣":	
	initTable(selectedName,["语文","书写","数学","科学","道法"],[94,46,99,40,50]);
	break;


            default:
                location.href = "../../error.html"
        }
      })


})
