import org.apache.log4j.ConsoleAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.springframework.web.servlet.DispatcherServlet;

import java.io.File;

public class JettyStarter
{
    public static final int PORT = 8080;

    private JettyStarter()
    {
    }

    public static void main(String[] arg) throws Exception
    {
        setupLogging();

        final Server server = new Server(PORT);
        final ContextHandler root = setupHandlers(server);

        setupSpring(root);
        powerOn(server);
    }

    private static void setupSpring(ContextHandler root)
    {
        /**
         * <servlet>
         *    <servlet-name>springmvc</servlet-name>
         *    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
         * </servlet>
         */

        final ServletContextHandler handler = new ServletContextHandler(root, "", ServletContextHandler.SESSIONS);
        handler.setResourceBase(".");
        handler.addServlet(DispatcherServlet.class, "*.do");
    }

    private static void powerOn(Server server) throws Exception
    {
        server.start();
        server.join();
    }

    private static ContextHandler setupHandlers(Server server)
    {
        final HandlerList handlers = new HandlerList();
        final ResourceHandler resourceHandler = new ResourceHandler();

        final String absolutePath = new File("").getAbsolutePath();

        resourceHandler.setResourceBase(absolutePath);

        handlers.addHandler(resourceHandler);

        final ContextHandler contextHandler = new ContextHandler(server, "/");
        contextHandler.setResourceBase(absolutePath);
        handlers.addHandler(contextHandler);

        server.setHandler(handlers);

        return contextHandler;
    }

    private static void setupLogging()
    {
        Logger.getRootLogger().addAppender(new ConsoleAppender(new PatternLayout()));
        Logger.getRootLogger().setLevel(Level.INFO);
    }
}
