require('./admin/adminlte');
require('./admin/dashboard');
require('./admin/demo');
require('./bootstrap');
//tests
$(function(){
    $("#numberOfAnswer").change(function () {
        let n = this.value;
        $("#answers").empty();
        for(let i = 1; i <= n ; i++ ){
            $("#answers").append(`<div class="col-sm-6">
                        <label for="answer${i}" class="control-label">گزینه ${i}</label>
                        <textarea class="form-control" name="answer${i}" id="answer${i}" placeholder="گزینه ${i} را وارد کنید"></textarea>
                    </div>
                    
                    <div class="col-sm-6">
                        <label for="value${i}" class="control-label">ارزش گزینه ${i}</label>
                        <input type="number" class="form-control" name="value${i}" id="value${i}" placeholder="ارزش گزینه ${i} را وارد کنید" ">
                    </div>`);
        }

    });
});


$(function(){
    $("#numberOfResult").change(function () {
        let n = this.value;
        $("#results").empty();
        if ($("#typeOfResult").val() == "type1")
        {
            for(let i = 1; i <= n ; i++ ){
                $("#results").append(`<div class="col-sm-6">
                        <label for="result${i}" class="control-label">نتیجه </label>
                        <textarea class="form-control" name="result${i}" id="result${i}" placeholder="نتیجه را وارد کنید"></textarea>
                    </div>

                    <div class="col-sm-6">
                        <label for="result_value${i}" class="control-label">ماکزیمم بازه</label>
                        <input type="number" class="form-control" name="result_value${i}" id="result_value${i}" placeholder="ماکزیمم بازه را وارد کنید" >
                    </div>`);
            }

        }

    });
});

