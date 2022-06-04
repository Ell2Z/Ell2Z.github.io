document.write('<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>')
$(function(){
    $('#submitButton').click(function(e) {
        $(this).prop('disabled', true);
        e.preventDefault();

        var selected = $("input[type='number'][name='number']").val();
        var selectedName = $("input[type='text'][name='name']").val();
        var info = document.getElementById("info1");
        var tableScore = document.getElementById("container1");
        var infoFill = document.getElementById("info-fill");
        var show = document.createElement('table');
        var row = show.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML= "语文";
        cell2.innerHTML= "数学";
        var row1 = show.insertRow(1);
        var cell3 = row1.insertCell(0);
        var cell4 = row1.insertCell(1);
        show.style.cssText= "width: 70%;margin-right: 15%; margin-left: 15%;font-size: 23px;box-shadow: 2px 3px 0px var(--bs-body-bg);border-radius: 19px;";
        tableScore.appendChild(show);

        switch(selected + selectedName){
            case "1宋家颖":
                info.innerText= selectedName;
                infoFill.style.display = "none";
                cell3.innerHTML= "100";
                cell4.innerHTML= "100";
                break;
            default:
                location.href = "../../error.html"
        }
      })

      
})
