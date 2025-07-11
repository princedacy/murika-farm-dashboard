
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  FileText, 
  Settings,
  Leaf,
  Package,
  UserCheck,
  UsersRound
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function AppSidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    {
      title: t("dashboard"),
      url: "/",
      icon: BarChart3,
    },
    {
      title: t("products"),
      url: "/products",
      icon: Package,
    },
    {
      title: t("orders"),
      url: "/orders",
      icon: ShoppingCart,
    },
    {
      title: t("analyticsReports"),
      url: "/analytics",
      icon: FileText,
    },
    {
      title: "Farmers",
      url: "/farmers",
      icon: UserCheck,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: UsersRound,
    },
    {
      title: t("settings"),
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/4d59c38b-212e-45ce-add5-0cac48484fc2.png" 
            alt="Murika Logo" 
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-poppins font-bold text-sidebar-foreground">
              Murika
            </h2>
            <p className="text-sm text-sidebar-foreground/70">
              Farm Dashboard
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-poppins">
            {t("navigation")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-quicksand">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="space-y-3">
          <LanguageSwitcher />
          <div className="flex items-center gap-3 text-sidebar-foreground/70">
            <Leaf className="h-4 w-4" />
            <span className="text-sm font-quicksand">{t("growingTogether")}</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
