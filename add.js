$("#addTodo").click(function(){
    console.log("実行")
    const inputTodo = $("input").val();

    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $('input').val("");
})