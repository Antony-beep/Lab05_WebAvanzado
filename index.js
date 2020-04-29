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
    }else if(accion=='Mantenimientos'){
        Mantenimientos();
    }else if(accion=='Procesos'){
        Procesos();
    }else if(accion=='Reportes'){
        Reportes();
    }else {
        inicio();
    }
    
}
function Mantenimientos(){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Mantenimientos</h1>');
    res.end();
}
function Procesos(){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Procesos</h1>');
    res.end();
}

function inicio(){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Pagina principal de la aplicación</h1>');
    res.write('<ul><p><li><a href=/app?accion=Mantenimientos>Mantenimientos</a></li></p>'+
                '<p><li><a href=/app?accion=Procesos>Procesos</a></li></p>'+
                '<p><li><a href=/app?accion=Reportes>Reportes</a></li></p></ul>');
    res.end();
}
function Reportes(){
    res.setHeader('Content-Type','text/html');
res.write("<html lang=\"en\">");
res.write("");
res.write("<head>");
res.write("");
res.write("  <meta charset=\"utf-8\">");
res.write("  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">");
res.write("  <meta name=\"description\" content=\"\">");
res.write("  <meta name=\"author\" content=\"\">");
res.write("");
res.write("  <title>Modern Business - Start Bootstrap Template<\/title>");
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
res.write("      <a class=\"navbar-brand\" href=\"index.html\">Start Bootstrap<\/a>");
res.write("      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">");
res.write("        <span class=\"navbar-toggler-icon\"><\/span>");
res.write("      <\/button>");
res.write("      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">");
res.write("        <ul class=\"navbar-nav ml-auto\">");
res.write("          <li class=\"nav-item\">");
res.write("            <a class=\"nav-link\" href=\"about.html\">About<\/a>");
res.write("          <\/li>");
res.write("          <li class=\"nav-item\">");
res.write("            <a class=\"nav-link\" href=\"services.html\">Services<\/a>");
res.write("          <\/li>");
res.write("          <li class=\"nav-item\">");
res.write("            <a class=\"nav-link\" href=\"contact.html\">Contact<\/a>");
res.write("          <\/li>");
res.write("          <li class=\"nav-item dropdown\">");
res.write("            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownPortfolio\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">");
res.write("              Portfolio");
res.write("            <\/a>");
res.write("            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPortfolio\">");
res.write("              <a class=\"dropdown-item\" href=\"portfolio-1-col.html\">1 Column Portfolio<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"portfolio-2-col.html\">2 Column Portfolio<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"portfolio-3-col.html\">3 Column Portfolio<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"portfolio-4-col.html\">4 Column Portfolio<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"portfolio-item.html\">Single Portfolio Item<\/a>");
res.write("            <\/div>");
res.write("          <\/li>");
res.write("          <li class=\"nav-item dropdown\">");
res.write("            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">");
res.write("              Blog");
res.write("            <\/a>");
res.write("            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">");
res.write("              <a class=\"dropdown-item\" href=\"blog-home-1.html\">Blog Home 1<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"blog-home-2.html\">Blog Home 2<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"blog-post.html\">Blog Post<\/a>");
res.write("            <\/div>");
res.write("          <\/li>");
res.write("          <li class=\"nav-item dropdown\">");
res.write("            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">");
res.write("              Other Pages");
res.write("            <\/a>");
res.write("            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">");
res.write("              <a class=\"dropdown-item\" href=\"full-width.html\">Full Width Page<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"sidebar.html\">Sidebar Page<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"faq.html\">FAQ<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"404.html\">404<\/a>");
res.write("              <a class=\"dropdown-item\" href=\"pricing.html\">Pricing Table<\/a>");
res.write("            <\/div>");
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
res.write("      <div class=\"carousel-inner\" role=\"listbox\">");
res.write("        <!-- Slide One - Set the background image for this slide in the line below -->");
res.write("        <div class=\"carousel-item active\" style=\"background-image: url('http:\/\/placehold.it\/1900x1080')\">");
res.write("          <div class=\"carousel-caption d-none d-md-block\">");
res.write("            <h3>First Slide<\/h3>");
res.write("            <p>This is a description for the first slide.<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("        <!-- Slide Two - Set the background image for this slide in the line below -->");
res.write("        <div class=\"carousel-item\" style=\"background-image: url('http:\/\/placehold.it\/1900x1080')\">");
res.write("          <div class=\"carousel-caption d-none d-md-block\">");
res.write("            <h3>Second Slide<\/h3>");
res.write("            <p>This is a description for the second slide.<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("        <!-- Slide Three - Set the background image for this slide in the line below -->");
res.write("        <div class=\"carousel-item\" style=\"background-image: url('http:\/\/placehold.it\/1900x1080')\">");
res.write("          <div class=\"carousel-caption d-none d-md-block\">");
res.write("            <h3>Third Slide<\/h3>");
res.write("            <p>This is a description for the third slide.<\/p>");
res.write("          <\/div>");
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
res.write("    <h1 class=\"my-4\">Welcome to Modern Business<\/h1>");
res.write("");
res.write("    <!-- Marketing Icons Section -->");
res.write("    <div class=\"row\">");
res.write("      <div class=\"col-lg-4 mb-4\">");
res.write("        <div class=\"card h-100\">");
res.write("          <h4 class=\"card-header\">Card Title<\/h4>");
res.write("          <div class=\"card-body\">");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.<\/p>");
res.write("          <\/div>");
res.write("          <div class=\"card-footer\">");
res.write("            <a href=\"#\" class=\"btn btn-primary\">Learn More<\/a>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 mb-4\">");
res.write("        <div class=\"card h-100\">");
res.write("          <h4 class=\"card-header\">Card Title<\/h4>");
res.write("          <div class=\"card-body\">");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.<\/p>");
res.write("          <\/div>");
res.write("          <div class=\"card-footer\">");
res.write("            <a href=\"#\" class=\"btn btn-primary\">Learn More<\/a>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 mb-4\">");
res.write("        <div class=\"card h-100\">");
res.write("          <h4 class=\"card-header\">Card Title<\/h4>");
res.write("          <div class=\"card-body\">");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.<\/p>");
res.write("          <\/div>");
res.write("          <div class=\"card-footer\">");
res.write("            <a href=\"#\" class=\"btn btn-primary\">Learn More<\/a>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("    <\/div>");
res.write("    <!-- \/.row -->");
res.write("");
res.write("    <!-- Portfolio Section -->");
res.write("    <h2>Portfolio Heading<\/h2>");
res.write("");
res.write("    <div class=\"row\">");
res.write("      <div class=\"col-lg-4 col-sm-6 portfolio-item\">");
res.write("        <div class=\"card h-100\">");
res.write("          <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>");
res.write("          <div class=\"card-body\">");
res.write("            <h4 class=\"card-title\">");
res.write("              <a href=\"#\">Project One<\/a>");
res.write("            <\/h4>");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 col-sm-6 portfolio-item\">");
res.write("        <div class=\"card h-100\">");
res.write("          <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>");
res.write("          <div class=\"card-body\">");
res.write("            <h4 class=\"card-title\">");
res.write("              <a href=\"#\">Project Two<\/a>");
res.write("            <\/h4>");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 col-sm-6 portfolio-item\">");
res.write("        <div class=\"card h-100\">");
res.write("          <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>");
res.write("          <div class=\"card-body\">");
res.write("            <h4 class=\"card-title\">");
res.write("              <a href=\"#\">Project Three<\/a>");
res.write("            <\/h4>");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 col-sm-6 portfolio-item\">");
res.write("        <div class=\"card h-100\">");
res.write("          <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>");
res.write("          <div class=\"card-body\">");
res.write("            <h4 class=\"card-title\">");
res.write("              <a href=\"#\">Project Four<\/a>");
res.write("            <\/h4>");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 col-sm-6 portfolio-item\">");
res.write("        <div class=\"card h-100\">");
res.write("          <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>");
res.write("          <div class=\"card-body\">");
res.write("            <h4 class=\"card-title\">");
res.write("              <a href=\"#\">Project Five<\/a>");
res.write("            <\/h4>");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-4 col-sm-6 portfolio-item\">");
res.write("        <div class=\"card h-100\">");
res.write("          <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>");
res.write("          <div class=\"card-body\">");
res.write("            <h4 class=\"card-title\">");
res.write("              <a href=\"#\">Project Six<\/a>");
res.write("            <\/h4>");
res.write("            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.<\/p>");
res.write("          <\/div>");
res.write("        <\/div>");
res.write("      <\/div>");
res.write("    <\/div>");
res.write("    <!-- \/.row -->");
res.write("");
res.write("    <!-- Features Section -->");
res.write("    <div class=\"row\">");
res.write("      <div class=\"col-lg-6\">");
res.write("        <h2>Modern Business Features<\/h2>");
res.write("        <p>The Modern Business template by Start Bootstrap includes:<\/p>");
res.write("        <ul>");
res.write("          <li>");
res.write("            <strong>Bootstrap v4<\/strong>");
res.write("          <\/li>");
res.write("          <li>jQuery<\/li>");
res.write("          <li>Font Awesome<\/li>");
res.write("          <li>Working contact form with validation<\/li>");
res.write("          <li>Unstyled page elements for easy customization<\/li>");
res.write("        <\/ul>");
res.write("        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.<\/p>");
res.write("      <\/div>");
res.write("      <div class=\"col-lg-6\">");
res.write("        <img class=\"img-fluid rounded\" src=\"http:\/\/placehold.it\/700x450\" alt=\"\">");
res.write("      <\/div>");
res.write("    <\/div>");
res.write("    <!-- \/.row -->");
res.write("");
res.write("    <hr>");
res.write("");
res.write("    <!-- Call to Action Section -->");
res.write("    <div class=\"row mb-4\">");
res.write("      <div class=\"col-md-8\">");
res.write("        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.<\/p>");
res.write("      <\/div>");
res.write("      <div class=\"col-md-4\">");
res.write("        <a class=\"btn btn-lg btn-secondary btn-block\" href=\"#\">Call to Action<\/a>");
res.write("      <\/div>");
res.write("    <\/div>");
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
res.write("  <script src=\"vendor\/jquery\/jquery.min.js\"><\/script>");
res.write("  <script src=\"vendor\/bootstrap\/js\/bootstrap.bundle.min.js\"><\/script>");
res.write("");
res.write("<\/body>");
res.write("");
res.write("<\/html>");
res.write("");

    res.end();
}