var check_email = /^([\w-]+(\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.[a-z]{2,6}(\.\[a-z]{2})?$/;
function checknull(txt){
    if (txt.value.length==0)
        return true;
    else
        return false;
}
function StringMatch(txt,reg){
    return reg.test(txt.value);
}
function validform(f){
    if(checknull(f.email)){
        alert("Email không được để trống");
        f.email.focus();
        return false;
    }
    if(!StringMatch(f.email,check_email)){
        alert("Email phải đúng định dạng");
        f.email.focus();
        return false;
    }
    alert("Đã ghi nhận email: " + f.email.value);
    return true;
}