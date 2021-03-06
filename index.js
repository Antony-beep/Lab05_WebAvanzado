var http = require('http');
var url = require('url');
var server = http.createServer(callback_handlerHttp).listen(9090);
var req,res,par;
function callback_handlerHttp(request,response){
    req = request;
    res = response;
    par = url.parse(req.url,true).query;
    var accion = par.accion;
    if(accion==undefined){
        inicio();
    }else {
        inicio();
    }
    
}
function inicio(){
    res.setHeader('Content-Type','text/html');
    res.write("<!DOCTYPE html>");
    res.write("<html lang=\"en\">");
    res.write("");
    res.write("<head>");
    res.write("");
    res.write("  <meta charset=\"utf-8\">");
    res.write("  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">");
    res.write("  <meta name=\"description\" content=\"\">");
    res.write("  <meta name=\"author\" content=\"\">");
    res.write("");
    res.write("  <title>Empresa ABC<\/title>");
    res.write("");
    res.write("  <!-- Bootstrap core CSS -->");
    res.write("  <link href=\"https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.4.1\/css\/bootstrap.min.css\" rel=\"stylesheet\">");
    res.write("");
    res.write("  <!-- Custom styles for this template -->");
    res.write("  <link href=\"css\/modern-business.css\" rel=\"stylesheet\">");
    res.write("");
    res.write("<\/head>");
    res.write("");
    res.write("<body>");
    res.write("");
    res.write("  <!-- Navigation -->");
    res.write("  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top\">");
    res.write("    <div class=\"container\">");
    res.write("      <a class=\"navbar-brand\" href=\"index.html\">CyberTec<\/a>");
    res.write("      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">");
    res.write("        <span class=\"navbar-toggler-icon\"><\/span>");
    res.write("      <\/button>");
    res.write("      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">");
    res.write("        <ul class=\"navbar-nav ml-auto\">");
    res.write("          <li class=\"nav-item\">");
    res.write("            <a class=\"nav-link\" href=\"#nosotros\">Nosotros<\/a>");
    res.write("          <\/li>");
    res.write("          <li class=\"nav-item\">");
    res.write("            <a class=\"nav-link\" href=\"#servicios\">Servicios<\/a>");
    res.write("          <\/li>");
    res.write("          <li class=\"nav-item\">");
    res.write("            <a class=\"nav-link\" href=\"#contactanos\">Contactanos<\/a>");
    res.write("          <\/li>");
    res.write("        <\/ul>");
    res.write("      <\/div>");
    res.write("    <\/div>");
    res.write("  <\/nav>");
    res.write("");
    res.write("  <header>");
    res.write("    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">");
    res.write("      <ol class=\"carousel-indicators\">");
    res.write("        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"><\/li>");
    res.write("        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"><\/li>");
    res.write("        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"><\/li>");
    res.write("      <\/ol>");
    res.write("      <div class=\"carousel-inner\">");
    res.write("        <div class=\"carousel-item active\">");
    res.write("          <img class=\"d-block w-100\" src=\"https:\/\/blogs.imf-formacion.com\/blog\/tecnologia\/wp-content\/uploads\/2019\/08\/peliculas-hackers.jpg\" alt=\"First slide\">");
    res.write("        <\/div>");
    res.write("        <div class=\"carousel-item\">");
    res.write("          <img class=\"d-block w-100\" src=\"https:\/\/www.esan.edu.pe\/apuntes-empresariales\/2019\/02\/05\/1500x844_sistema_informacion_seguridad.jpg\" alt=\"Second slide\">");
    res.write("        <\/div>");
    res.write("      <\/div>");
    res.write("      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">");
    res.write("        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"><\/span>");
    res.write("        <span class=\"sr-only\">Previous<\/span>");
    res.write("      <\/a>");
    res.write("      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">");
    res.write("        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"><\/span>");
    res.write("        <span class=\"sr-only\">Next<\/span>");
    res.write("      <\/a>");
    res.write("    <\/div>");
    res.write("  <\/header>");
    res.write("");
    res.write("  <!-- Page Content -->");
    res.write("  <div class=\"container\">");
    res.write("");
    res.write("    <h3 class=\"my-4 \" id=\"nosotros\">Mantente seguro y a tu empresa<\/h3>");
    res.write("    <hr>");
    res.write("    <!-- Marketing Icons Section -->");
    res.write("    <div class=\"jumbotron\" >");
    res.write("      <h5 class=\"display-5\">Quienes somos?<\/h5>");
    res.write("  <p class=\"lead\">Compañia de consultoria y servicios en Tecnologías de la Información, especializada en seguridad informática, creada a partir de la experiencia asociada de especialistas en diversas áreas del conocimiento.<\/p>");
    res.write("  <p class=\"lead\"><\/p>");
    res.write("  <hr class=\"my-4\">");
    res.write("  <p>Nuestras iniciativas se diseñan y desarrollan para satisfacer las necesidades específicas de públicos concretos.<\/p>");
    res.write("<\/div>");
    res.write("    <!-- \/.row -->");
    res.write("    <h3 class=\"my-4\" id=\"servicios\">Servicios<\/h3>");
    res.write("    <hr>");
    res.write("    <div class=\"jumbotron\" id=\"nosotros\">");
    res.write("");
    res.write("        <h5 class=\"display-5\">Análisis de Vulnerabilidades<\/h5>");
    res.write("    <p class=\"lead\">Un análisis de vulnerabilidades es el servicio más básico e inicial que una empresa debe realizar. Podría decirse que sería lo mismo que realizarse un diagnóstico básico (tensión arterial, nivel de azúcar, etc.). Este servicio permite conocer las vulnerabilidades más básicas que puedan existir en los sistemas de la organización.");
    res.write("      En concreto, este servicio se basa en identificar con herramientas automáticas la existencia de vulnerabilidades sobre una aplicación, servicio o infraestructura (publicada a Internet o en la red Interna). A fin de obtener un informe donde se detallan de forma concisa y clara todas las vulnerabilidades ");
    res.write("      identificadas (eliminando los falsos positivos), riesgos que suponen y las recomendaciones para su subsanación.<\/p>");
    res.write("      <hr class=\"my-3\">");
    res.write("      <h5 class=\"display-5\">TEST DE INTRUSIÓN<\/h5>");
    res.write("    <p class=\"lead\">A diferencia del “Análisis de Vulnerabilidades” un Test de Intrusión o también conocido como “Test de Penetración”, incluye además del escaneo de vulnerabilidades automáticas, pruebas manuales realizadas por un especialista en ciberseguridad, el cual estudia el entorno (red, sistemas, etc.) e intenta identificar ");
    res.write("      fallos de seguridad, donde las herramientas automáticas no son capaces de llegar.");
    res.write("      Este tipo de servicio son más completos y requieren una mayor dedicación en tiempo que un “análisis de vulnerabilidades”, así como disponer de perfiles altamente cualificados para la ejecución de las pruebas.<\/p>");
    res.write("      <hr class=\"my-3\">");
    res.write("      <h5 class=\"display-5\">WEB HACKING<\/h5>");
    res.write("    <p class=\"lead\">Podría indicarse que es similar al “Test de Intrusión” pero dirigido exclusivamente, a la revisión de CiberSeguridad de una aplicación Web (eCommerce, Portales Web, B2B, etc.), en las que un especialista en ciberseguridad analiza cada uno de los parámetros y flujos que se producen en");
    res.write("       dicha aplicación Web, a fin de identificar los posibles fallos de seguridad que puedan existir.<\/p>");
    res.write("      <hr class=\"my-3\">");
    res.write("       <h5 class=\"display-5\">REVISIÓN WIFI<\/h5>");
    res.write("       <p class=\"lead\">Las redes wifi es un punto de entrada muy utilizado por los delincuentes, ya que estas no están limitadas físicamente (paredes, vallas, etc.) de la organización. Por ello, las revisiones Wifi es un servicio muy interesante para las empresas, porque proporcionan una visión de los puntos de acceso que están siendo controlados por el departamento de TI, así como la posible identificación de otros puntos de acceso que no tienen constancia ");
    res.write("         (por ejemplo, un empleado instala un punto de acceso sin la autorización del departamento de TI).");
    res.write("        Adicionalmente, también es posible identificar si los protocolos de cifrado y funciones establecidas son seguros, y no pueden ser explotados por un delincuente. Porque si no se configuran de forma correcta, podría un delincuente aprovechar esta debilidad para obtener acceso a la red interna sin necesidad de estar físicamente dentro de la organización, bastaría con estar dentro del perímetro de cobertura de los puntos de acceso.<\/p>");
    res.write("      <hr class=\"my-4\">");
    res.write("  <\/div>");
    res.write("    <!-- Portfolio Section -->");
    res.write("    ");
    res.write("    <!-- \/.row -->");
    res.write("");
    res.write("    <!-- Features Section -->");
    res.write("    <div class=\"row\" id=\"contactanos\">");
    res.write("      <div class=\"col-md-3\">");
    res.write("        <div class=\"contact-info\">");
    res.write("          <img src=\"https:\/\/image.ibb.co\/kUASdV\/contact-image.png\" \/>");
    res.write("          <h2>Contactanos<\/h2>");
    res.write("          <h4>Nos encanta escucharte!<\/h4>");
    res.write("        <\/div>");
    res.write("      <\/div>");
    res.write("      <div class=\"col-md-9\">");
    res.write("        <div class=\"contact-form\">");
    res.write("          <div class=\"form-group\">");
    res.write("            <label class=\"control-label col-sm-2\" for=\"fname\">Nombre:<\/label>");
    res.write("            <div class=\"col-sm-10\">          ");
    res.write("            <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Ingrese primer nombre\" name=\"fname\">");
    res.write("            <\/div>");
    res.write("          <\/div>");
    res.write("          <div class=\"form-group\">");
    res.write("            <label class=\"control-label col-sm-2\" for=\"lname\">Apellido:<\/label>");
    res.write("            <div class=\"col-sm-10\">          ");
    res.write("            <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Ingrese su apellido\" name=\"lname\">");
    res.write("            <\/div>");
    res.write("          <\/div>");
    res.write("          <div class=\"form-group\">");
    res.write("            <label class=\"control-label col-sm-2\" for=\"email\">Email:<\/label>");
    res.write("            <div class=\"col-sm-10\">");
    res.write("            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Ingrese su email\" name=\"email\">");
    res.write("            <\/div>");
    res.write("          <\/div>");
    res.write("          <div class=\"form-group\">");
    res.write("            <label class=\"control-label col-sm-2\" for=\"comment\">Comentario:<\/label>");
    res.write("            <div class=\"col-sm-10\">");
    res.write("            <textarea class=\"form-control\" rows=\"5\" id=\"comment\"><\/textarea>");
    res.write("            <\/div>");
    res.write("          <\/div>");
    res.write("          <div class=\"form-group\">        ");
    res.write("            <div class=\"col-sm-offset-2 col-sm-10\">");
    res.write("            <button type=\"submit\" class=\"btn btn-success\">Enviar<\/button>");
    res.write("            <\/div>");
    res.write("          <\/div>");
    res.write("        <\/div>");
    res.write("      <\/div>");
    res.write("    <\/div>");
    res.write("    <!-- \/.row -->");
    res.write("");
    res.write("    <hr>");
    res.write("");
    res.write("    <!-- Call to Action Section -->");
    res.write("   ");
    res.write("");
    res.write("  <\/div>");
    res.write("  <!-- \/.container -->");
    res.write("");
    res.write("  <!-- Footer -->");
    res.write("  <footer class=\"py-5 bg-dark\">");
    res.write("    <div class=\"container\">");
    res.write("      <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2019<\/p>");
    res.write("    <\/div>");
    res.write("    <!-- \/.container -->");
    res.write("  <\/footer>");
    res.write("");
    res.write("  <!-- Bootstrap core JavaScript -->");
    res.write("  <script src=\"https:\/\/code.jquery.com\/jquery-3.5.0.min.js\" ");
    res.write("  integrity=\"sha256-xNzN2a4ltkB44Mc\/Jz3pT4iU1cmeR0FkXs4pru\/JxaQ=\" crossorigin=\"anonymous\"><\/script>");
    res.write("");
    res.write("  <script src=\"https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.4.1\/js\/bootstrap.min.js\" ");
    res.write("  integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"><\/script>");
    res.write("  ");
    res.write("  <script src=\"https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.4.1\/js\/bootstrap.bundle.min.js\" ");
    res.write("  integrity=\"sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm\" crossorigin=\"anonymous\"><\/script>");
    res.write("");
    res.write("<\/body>");
    res.write("");
    res.write("<\/html>");
    res.write("");
    
        
    res.end();
}
