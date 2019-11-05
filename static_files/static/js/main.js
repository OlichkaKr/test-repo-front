function get_all_data() {
    $.get("https://akerbrinfo.azurewebsites.net/api/service/get/all", render_page);
}

function render_page(result) {
    var data = JSON.parse(result);
    for (var i in data) {
        html = '<td class="td-style">' + (+i + 1) + '</td>' +
            '<td class="td-style">' + data[i]['cords'] + '</td>' +
            '<td class="td-style">' + data[i]['filling'] + '</td>' +
            '<td class="td-style">' + data[i]['export'] + '</td>';
        var p = document.getElementById("in-table");
        var newElement = document.createElement('tr');
        newElement.innerHTML = html;
        p.appendChild(newElement);
        var div = document.getElementById("in-table");
        div.insertBefore(newElement, div.lastChild.nextSibling);
    }
}

function addData() {
    var d = JSON.stringify({cords: document.getElementById("cords").value,
        filling: document.getElementById("filling").value,
        export: document.getElementById("export").value});
    $.ajax({
        type: 'POST',
        url: "https://akerbrinfo.azurewebsites.net/api/service/post",
        data: {'data': d}
    });
    document.getElementById("cords").value = "";
    document.getElementById("filling").value = "";
    document.getElementById("export").value = "";
}

