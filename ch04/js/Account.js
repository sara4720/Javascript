function Account(bank, id, name, money){

    // 멤버변수
    this.bank = bank;
    this.id = id;
    this.name = name;
    this.money = money;

    // 멤버메서드
    this.deposit = function(_money){
        this.money += _money;
    }
    this.withdraw = function(_money){
        this.money -= _money;
    }
    this.show = function(){
        document.write('---------------------------<br />');
        document.write('은행명 : '+this.bank+'<br />');
        document.write('계좌번호 : '+this.id+'<br />');
        document.write('입금주 : '+this.name+'<br />');
        document.write('현재잔액 : '+this.money+'<br />');
        document.write('---------------------------<br />');
    }

}