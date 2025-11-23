export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      availability_windows: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_active: boolean
          start_time: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          is_active?: boolean
          start_time: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_active?: boolean
          start_time?: string
          updated_at?: string
        }
        Relationships: []
      }
      consultation_bookings: {
        Row: {
          admin_notes: string | null
          created_at: string
          date: string
          email: string
          end_time: string
          id: string
          name: string
          notes: string | null
          phone: string | null
          project: string
          start_time: string
          status: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          date: string
          email: string
          end_time: string
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          project: string
          start_time: string
          status?: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          date?: string
          email?: string
          end_time?: string
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          project?: string
          start_time?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_blocks: {
        Row: {
          content: string
          created_at: string
          description: string | null
          id: string
          is_locked: boolean
          key: string
          min_role_to_edit: string
          section: string
          title: string
          updated_at: string
          updated_by_user_id: string | null
        }
        Insert: {
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          is_locked?: boolean
          key: string
          min_role_to_edit?: string
          section: string
          title: string
          updated_at?: string
          updated_by_user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          is_locked?: boolean
          key?: string
          min_role_to_edit?: string
          section?: string
          title?: string
          updated_at?: string
          updated_by_user_id?: string | null
        }
        Relationships: []
      }
      investor_documents: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          is_visible: boolean | null
          title: string
          updated_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          is_visible?: boolean | null
          title: string
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          is_visible?: boolean | null
          title?: string
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      investor_leads: {
        Row: {
          amount_range: string
          comments: string | null
          country: string | null
          created_at: string
          email: string
          id: string
          internal_notes: string | null
          last_contacted_at: string | null
          last_email_type: string | null
          name: string
          next_action_at: string | null
          notes: string | null
          phone: string | null
          project_id: string | null
          source: string | null
          status: Database["public"]["Enums"]["lead_status"] | null
        }
        Insert: {
          amount_range?: string
          comments?: string | null
          country?: string | null
          created_at?: string
          email: string
          id?: string
          internal_notes?: string | null
          last_contacted_at?: string | null
          last_email_type?: string | null
          name: string
          next_action_at?: string | null
          notes?: string | null
          phone?: string | null
          project_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
        }
        Update: {
          amount_range?: string
          comments?: string | null
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          internal_notes?: string | null
          last_contacted_at?: string | null
          last_email_type?: string | null
          name?: string
          next_action_at?: string | null
          notes?: string | null
          phone?: string | null
          project_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "investor_leads_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      news_posts: {
        Row: {
          body: string
          category: string | null
          created_at: string
          excerpt: string
          id: string
          is_published: boolean | null
          project_id: string | null
          published_at: string | null
          slug: string
          title: string
          type: string | null
          updated_at: string
        }
        Insert: {
          body: string
          category?: string | null
          created_at?: string
          excerpt: string
          id?: string
          is_published?: boolean | null
          project_id?: string | null
          published_at?: string | null
          slug: string
          title: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          body?: string
          category?: string | null
          created_at?: string
          excerpt?: string
          id?: string
          is_published?: boolean | null
          project_id?: string | null
          published_at?: string | null
          slug?: string
          title?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "news_posts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_updates: {
        Row: {
          body: string
          id: string
          is_public: boolean | null
          project_id: string
          published_at: string
          title: string
        }
        Insert: {
          body: string
          id?: string
          is_public?: boolean | null
          project_id: string
          published_at?: string
          title: string
        }
        Update: {
          body?: string
          id?: string
          is_public?: boolean | null
          project_id?: string
          published_at?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_updates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          category: string
          created_at: string
          currency: string | null
          current_raised: number | null
          deck_url: string | null
          hero_image_url: string
          id: string
          is_visible: boolean | null
          location: string | null
          long_description: string
          min_ticket: number | null
          priority: number | null
          short_description: string
          slug: string
          status: Database["public"]["Enums"]["project_status"]
          target_amount: number | null
          title: string
          updated_at: string
          website_url: string | null
        }
        Insert: {
          category: string
          created_at?: string
          currency?: string | null
          current_raised?: number | null
          deck_url?: string | null
          hero_image_url: string
          id?: string
          is_visible?: boolean | null
          location?: string | null
          long_description: string
          min_ticket?: number | null
          priority?: number | null
          short_description: string
          slug: string
          status?: Database["public"]["Enums"]["project_status"]
          target_amount?: number | null
          title: string
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          currency?: string | null
          current_raised?: number | null
          deck_url?: string | null
          hero_image_url?: string
          id?: string
          is_visible?: boolean | null
          location?: string | null
          long_description?: string
          min_ticket?: number | null
          priority?: number | null
          short_description?: string
          slug?: string
          status?: Database["public"]["Enums"]["project_status"]
          target_amount?: number | null
          title?: string
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      site_sections: {
        Row: {
          created_at: string | null
          description: string | null
          display_name: string
          id: string
          is_visible: boolean | null
          key: string
          min_role_to_view: string | null
          show_in_footer: boolean | null
          show_in_main_nav: boolean | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_name: string
          id?: string
          is_visible?: boolean | null
          key: string
          min_role_to_view?: string | null
          show_in_footer?: boolean | null
          show_in_main_nav?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_name?: string
          id?: string
          is_visible?: boolean | null
          key?: string
          min_role_to_view?: string | null
          show_in_footer?: boolean | null
          show_in_main_nav?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      social_media_links: {
        Row: {
          created_at: string
          display_name: string
          icon_name: string
          id: string
          is_visible: boolean
          platform: string
          sort_order: number
          updated_at: string
          url: string | null
        }
        Insert: {
          created_at?: string
          display_name: string
          icon_name: string
          id?: string
          is_visible?: boolean
          platform: string
          sort_order?: number
          updated_at?: string
          url?: string | null
        }
        Update: {
          created_at?: string
          display_name?: string
          icon_name?: string
          id?: string
          is_visible?: boolean
          platform?: string
          sort_order?: number
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          is_visible: boolean | null
          linkedin_url: string | null
          order_index: number | null
          photo_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          is_visible?: boolean | null
          linkedin_url?: string | null
          order_index?: number | null
          photo_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          is_visible?: boolean | null
          linkedin_url?: string | null
          order_index?: number | null
          photo_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role_level: {
        Args: {
          min_role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "VIEWER"
      lead_status: "NEW" | "CONTACTED" | "QUALIFIED" | "DECLINED"
      project_status: "OPEN" | "CLOSED" | "COMING_SOON"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["SUPER_ADMIN", "ADMIN", "EDITOR", "VIEWER"],
      lead_status: ["NEW", "CONTACTED", "QUALIFIED", "DECLINED"],
      project_status: ["OPEN", "CLOSED", "COMING_SOON"],
    },
  },
} as const
