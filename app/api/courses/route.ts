import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/integrations/supabase/admin-client";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get("slug");

    if (slug) {
      const { data, error } = await supabaseAdmin
        .from("courses")
        .select("id,slug,title,category,description,price_usd,duration,location,metadata")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json(data ?? null);
    }

    const { data, error } = await supabaseAdmin
      .from("courses")
      .select("id,slug,title,category,description,price_usd,duration,location,metadata")
      .order("created_at", { ascending: true });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, error } = await supabaseAdmin.from("courses").insert([body]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data?.[0] ?? null);
  } catch (error) {
    console.error("Create course error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create course" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;
    if (!id) {
      return NextResponse.json({ error: "Course id is required for update." }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("courses")
      .update(updates)
      .eq("id", id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Update course error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update course" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Course id is required for delete." }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("courses").delete().eq("id", id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete course error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete course" },
      { status: 500 }
    );
  }
}

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error("Courses API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load courses" },
      { status: 500 }
    );
  }
}
