
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  FileText, 
  Settings,
  Leaf
} from "lucide-react";
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

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "User Management",
    url: "#",
    icon: Users,
  },
  {
    title: "Orders & Products",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Analytics Reports",
    url: "#",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
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
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-4 py-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-quicksand">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 text-sidebar-foreground/70">
          <Leaf className="h-4 w-4" />
          <span className="text-sm font-quicksand">Growing Together</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
