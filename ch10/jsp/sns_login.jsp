<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.SQLException" %>
<%
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

String returnStr="";
String err="'err':''";
String rtvloginYn = "'loginYn':''";
String rtvUserName = "'userName':''";
Connection conn = null;
Statement stmt = null;
ResultSet rs = null;
try
{
    // �Ķ���� �ޱ�
    String userId = request.getParameter("user_id");
    String userPwd = request.getParameter("user_pwd"); 

    Class.forName("com.mysql.jdbc.Driver");
    conn = DriverManager.getConnection(
        "jdbc:mysql://127.0.0.1:3306/talking?useUnicode=true&characterEncoding=euckr", 
        "root", 
        "1234");
    stmt = conn.createStatement();
    rs= stmt.executeQuery("select user_id, user_pwd, user_name from users where user_id = '" + userId + "' and user_pwd = '" + userPwd + "' ");
    if(rs.next())
    { 
        rtvloginYn = "'loginYn':'Y'";
        rtvUserName = "'userName':'" + rs.getString("user_name") + "'";

    }
    else
    {
        rtvloginYn = "'loginYn':'N'";
        err = "'err': '�α��� ID, ��ȣ�� Ȯ���Ͻʽÿ�'";
    }
}
catch(Exception ex)
{
    System.out.println(ex.toString());
    err = "'err': '" + ex.toString() + "'";
}
finally
{
    try{ rs.close();}catch(Exception exRs){}
    try{ stmt.close();}catch(Exception exStmt){}
    try{ conn.close();}catch(Exception exConn){}
}
returnStr = "{'data':{" + rtvloginYn + "," + rtvUserName + "," +  err + "}}";

out.println(returnStr.replace('\'','\"').trim());

%>
