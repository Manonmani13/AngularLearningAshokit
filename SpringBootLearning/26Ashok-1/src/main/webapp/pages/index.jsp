<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib  uri="http://www.springframework.org/tags/form" prefix="form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>Product Form</h2>

<form:form action="saveProduct" modelAttribute="product">
<table>
<tr>
<td>Product ID</td>
<td><form:input path="productId"/>
</tr>
<tr>
<td>Product Name</td>
<td><form:input path="productName"/>
</tr>
<tr>
<td>Product Price</td>
<td><form:input path="productPrice"/>
</tr>
<tr>
<td></td>
<td><input type="submit" value="save"></td>
</tr>
</table>

</form:form>
</body>
</html>