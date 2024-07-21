"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function SnapshotPage() {
  const [text, setText] = useState<string>("");
  const [outputLength, setOutputLength] = useState<string>("400");
  const [numberOfPoints, setNumberOfPoints] = useState<number | undefined>(3);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const parsedValue = newValue === "" ? undefined : parseFloat(newValue);
    setNumberOfPoints(parsedValue);
  };

  return (
    <div className="flex-1 container grid grid-cols-3 place-items-stretch h-full content-center min-h-full">
      <div className="py-8 px-4 col-span-1 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 col-span-2">
          <Label htmlFor="input-text">Text</Label>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="input-text"
            className="w-full resize-y py-2 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md border border-input bg-background"
            rows={3}
            placeholder="Enter the text to be summarized"></Textarea>
          <small className="text-neutral-500 text-xs">
            {text.length} characters
          </small>
        </div>
        <div className="flex flex-col col-span-1 flex-1 gap-2 mt-4">
          <Label htmlFor="output-length">Output Length</Label>
          <Select onValueChange={setOutputLength} defaultValue={outputLength}>
            <SelectTrigger>
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="400">400</SelectItem>
              <SelectItem value="800">800</SelectItem>
              <SelectItem disabled value="2000">
                2000
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 flex-col col-span-1 self-center gap-2 mt-4">
          <Label htmlFor="bullet-points">Bullet Points</Label>
          <Input
            id="number-input"
            type="number"
            value={numberOfPoints === undefined ? "" : numberOfPoints}
            onChange={handleChange}
            min={2}
            max={7}
            step={1}
          />
          <small className="text-neutral-500 text-xs">
            7 bullet points at max
          </small>
        </div>
        <Button className="mt-4 col-span-2" disabled={text === ""}>
          Generate Snapshot
        </Button>
      </div>
      <div className="py-8 px-4 col-span-2">
        <div className="border-dotted border p-4 h-full text-primary bg-secondary">
          Please provide the details to see the output
        </div>
      </div>
    </div>
  );
}
