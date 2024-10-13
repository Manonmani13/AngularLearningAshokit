<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>User Form</title>
</head>
<body>
    <h1>User Form</h1>
    <form:form action="saveUser" modelAttribute="user" method="POST">
        <table>
            <tr>
                <td>Username:</td>
                <td><form:input path="uname"/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><form:input path="pwd" type="password"/></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><form:input path="email"/></td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td><form:input path="phno"/></td>
            </tr>
        </table>
        <input type="submit" value="Submit"/>
    </form:form>
</body>
</html>
