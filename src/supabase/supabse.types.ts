export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      group_schedules: {
        Row: {
          created_at: string;
          description: string | null;
          end_date: string;
          group_id: string;
          id: number;
          owner_id: string;
          start_date: string;
          title: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          end_date: string;
          group_id?: string;
          id?: number;
          owner_id?: string;
          start_date: string;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          end_date?: string;
          group_id?: string;
          id?: number;
          owner_id?: string;
          start_date?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'group_schedules_group_id_fkey';
            columns: ['group_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'group_schedules_owner_id_fkey';
            columns: ['owner_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      group_user_ralations: {
        Row: {
          created_at: string;
          group_id: number;
          id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          group_id: number;
          id?: number;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          group_id?: number;
          id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'group_user_ralations_group_id_fkey';
            columns: ['group_id'];
            isOneToOne: false;
            referencedRelation: 'groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'group_user_ralations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      groups: {
        Row: {
          color: string | null;
          created_at: string;
          end_date: string;
          exclude_time_end: string;
          exclude_time_start: string;
          id: number;
          name: string;
          open: boolean;
          owner_id: string;
          start_date: string;
        };
        Insert: {
          color?: string | null;
          created_at?: string;
          end_date: string;
          exclude_time_end: string;
          exclude_time_start: string;
          id?: number;
          name: string;
          open: boolean;
          owner_id?: string;
          start_date: string;
        };
        Update: {
          color?: string | null;
          created_at?: string;
          end_date?: string;
          exclude_time_end?: string;
          exclude_time_start?: string;
          id?: number;
          name?: string;
          open?: boolean;
          owner_id?: string;
          start_date?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'groups_owner_id_fkey';
            columns: ['owner_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      personal_schedules: {
        Row: {
          created_at: string;
          description: string | null;
          end_date: string;
          id: number;
          start_date: string;
          title: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          end_date: string;
          id?: number;
          start_date: string;
          title: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          end_date?: string;
          id?: number;
          start_date?: string;
          title?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'personal_schedules_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          id: string;
          phone: string;
          user_name: string;
          user_nickname: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          phone: string;
          user_name: string;
          user_nickname?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          phone?: string;
          user_name?: string;
          user_nickname?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profile_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
