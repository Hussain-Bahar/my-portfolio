import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";

const BASE = import.meta.env.BASE_URL;

export default function Resume() {
  return (
    <section className="mx-auto my-10 max-w-6xl px-6">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">CV</div>
        <h1 className="mt-2 text-2xl font-semibold">Résumé</h1>
      </div>

      <Card className="glass border-white/10">
        <CardHeader>
          <CardTitle className="text-base">Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            src={`${BASE}mycv.pdf`}
            title="Hussain CV"
            className="h-[70vh] w-full rounded border border-white/10"
          />
        </CardContent>
      </Card>
    </section>
  );
}
