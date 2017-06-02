;(function() {
})

function push() {
    var uid = $('#uid').val()
    var from = $('#from').val()
    var message = $('#message').val()
    var timestamp = $('#timestamp').is(':checked')
    var test = $('#test').is(':checked')
    if(!uid) {
        alert_info('用户imei必填!')
        //  return
    }
    if((uid.length != 15 && uid.length != 27) || !/\b[0-9]{15}\b|\b[0-9a-z]{12}[0-9]{15}\b/.test(uid)) {
        alert_info('用户imei格式不对!')
        return
    }
    $('#result').text('')
    $.get( "/push",{id: uid, from: from, message: message,timestamp: timestamp, test: test}, function(data) {
        $('#result').text(data)
    }).fail(function(res){
        if(res.status >= 500) {
            alert_info('无法连接到服务器，请钉钉联系李守宇')
        } else {
            alert_info('参数错误，请检查参数')
        }
    });
}

function alert_info(info) {
    var modal = $('#info')
    modal.find('.modal-body > p').text(info)
    modal.modal('show')
}
