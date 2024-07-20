"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

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
  const [numberOfPoints, setNumberOfPoints] = useState<number[]>([3]);

  console.log(text, outputLength, numberOfPoints);
  return (
    <div className="container grid grid-cols-1 ">
      <div className="pt-8 px-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="input-text"
            className="mb-2 text-sm font-medium text-muted-foreground">
            Text
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="input-text"
            className="w-full resize-none py-2 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md border border-input bg-background"
            rows={3}
            placeholder="Enter the text to be summarized"></textarea>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="output-length"
            className="mb-2 text-sm font-medium text-muted-foreground">
            Output Length
          </label>
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
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="number-of-points"
            className="mb-2 text-sm font-medium text-muted-foreground">
            Output Length
          </label>
          <Slider
            id="number-of-points"
            value={numberOfPoints}
            onValueChange={(value) => setNumberOfPoints(value)}
            defaultValue={[3]}
            max={7}
            step={1}
          />
        </div>
        <Button className="mt-4">Generate Snapshot</Button>
      </div>
      <div className="pt-8 px-4">
        <div className="border-dotted border p-4 h-full bg-primary text-primary-foreground">
          Please provide the details to see the output
        </div>
      </div>
    </div>
  );
}
