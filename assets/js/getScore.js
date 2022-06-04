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
        for (let index = 0; index < 2; index++) {
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
        $(this).prop('disabled', true);
        e.preventDefault();

        var selected = $("input[type='number'][name='number']").val();
        var selectedName = $("input[type='text'][name='name']").val();

        switch(selected + selectedName){
            case "1宋家颖":	
                initTable(selectedName,["语文","数学",,],[95,97,0,0]);
                break;
            case "2张浩阳":	
                initTable(selectedName,["语文","数学",,],[36,20,0,0]);
                break;
            case "3张静雯":	
                initTable(selectedName,["语文","数学",,],[69,61,0,0]);
                break;
            case "4曹奥雪":	
                initTable(selectedName,["语文","数学",,],[96,84,0,0]);
                break;
            case "5曹莉姣":	
                initTable(selectedName,["语文","数学",,],[88,62,0,0]);
                break;
            case "6李妙晨":	
                initTable(selectedName,["语文","数学",,],[75,64,0,0]);
                break;
            case "7李梓汐":	
                initTable(selectedName,["语文","数学",,],[77,76,0,0]);
                break;
            case "8梁子一":	
                initTable(selectedName,["语文","数学",,],[78,67,0,0]);
                break;
            case "9梁明桐":	
                initTable(selectedName,["语文","数学",,],[86,54,0,0]);
                break;
            case "10梁雨萱":	
                initTable(selectedName,["语文","数学",,],[83,53,0,0]);
                break;
            case "11武新菊":	
                initTable(selectedName,["语文","数学",,],[91,58,0,0]);
                break;
            case "12江志清":	
                initTable(selectedName,["语文","数学",,],[91,81,0,0]);
                break;
            case "13江雨寒":	
                initTable(selectedName,["语文","数学",,],[45,30,0,0]);
                break;
            case "14王以科":	
                initTable(selectedName,["语文","数学",,],[89,74,0,0]);
                break;
            case "15王欣林":	
                initTable(selectedName,["语文","数学",,],[80,75,0,0]);
                break;
            case "16范云瞻":	
                initTable(selectedName,["语文","数学",,],[77,70,0,0]);
                break;
            case "17范云萍":	
                initTable(selectedName,["语文","数学",,],[90,81,0,0]);
                break;
            case "18范国硕":	
                initTable(selectedName,["语文","数学",,],[79,76,0,0]);
                break;
            case "19范恒熙":	
                initTable(selectedName,["语文","数学",,],[95,82,0,0]);
                break;
            case "20范林硕":	
                initTable(selectedName,["语文","数学",,],[73,72,0,0]);
                break;
            case "21范树泉":	
                initTable(selectedName,["语文","数学",,],[92,76,0,0]);
                break;
            case "22范沐萱":	
                initTable(selectedName,["语文","数学",,],[93,82,0,0]);
                break;
            case "23范浩然":	
                initTable(selectedName,["语文","数学",,],[33,7,0,0]);
                break;
            case "24范玉莹":	
                initTable(selectedName,["语文","数学",,],[85,61,0,0]);
                break;
            case "25范荣欣":	
                initTable(selectedName,["语文","数学",,],[89,87,0,0]);
                break;
            case "26范菁菁":	
                initTable(selectedName,["语文","数学",,],[84,51,0,0]);
                break;
            case "27范菲菲":	
                initTable(selectedName,["语文","数学",,],[61,45,0,0]);
                break;
            case "28范雨彤":	
                initTable(selectedName,["语文","数学",,],[75,59,0,0]);
                break;
            case "29范雪茹":	
                initTable(selectedName,["语文","数学",,],[55,50,0,0]);
                break;
            case "30许芸熙":	
                initTable(selectedName,["语文","数学",,],[52,37,0,0]);
                break;
            case "31赵晨茜":	
                initTable(selectedName,["语文","数学",,],[88,76,0,0]);
                break;
            case "32赵浩然":	
                initTable(selectedName,["语文","数学",,],[74,71,0,0]);
                break;
            case "33陈冲":	
                initTable(selectedName,["语文","数学",,],[77,64,0,0]);
                break;
            case "34马云飞":	
                initTable(selectedName,["语文","数学",,],[43,18,0,0]);
                break;
            case "35黄发宇":	
                initTable(selectedName,["语文","数学",,],[75,70,0,0]);
                break;
            case "36黄若微":	
                initTable(selectedName,["语文","数学",,],[100,87,0,0]);
                break;
            case "37王一诺":	
                initTable(selectedName,["语文","数学",,],[92,88,0,0]);
                break;
            case "38范洪昭":	
                initTable(selectedName,["语文","数学",,],[96,83,0,0]);
                break;
            case "39贾友瑞":	
                initTable(selectedName,["语文","数学",,],[73,79,0,0]);
                break;
            case "40贾蓝雯":	
                initTable(selectedName,["语文","数学",,],[82,74,0,0]);
                break;
            case "41黄可欣":	
                initTable(selectedName,["语文","数学",,],[98,79,0,0]);
                break;

            default:
                location.href = "../../error.html"
        }
      })

      
})
