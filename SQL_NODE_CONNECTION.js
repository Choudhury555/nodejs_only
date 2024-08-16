const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun(){
    let con;

    try {
        con = await oracledb.getConnection({
            user: "abhisek",
            password: "Abhisek#20",
            connectString: "localhost/orcl"
        });

        const data = await con.execute(
            // `select * from emp`,
            `update emp set ename=:ename where empid=:empid`,
            {ename:'CHIRANJEEB',empid:3},//this is the binds(e.g. updateValue='CHIRANJEEB' , condition=3)
            {autoCommit:true}
        );
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fun();