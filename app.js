$("#addTodo").click(function (){
    console.log("clickされました");
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type = 'checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});