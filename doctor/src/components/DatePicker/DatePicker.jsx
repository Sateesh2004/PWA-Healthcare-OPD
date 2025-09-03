import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for classnames
import { Button } from "@/components/ui/button"; // Button component from your UI lib
import { Calendar } from "@/components/ui/calendar"; // Calendar component from your UI lib
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Popover components from your UI lib

export function DatePicker() {
  const [date, setDate] = React.useState(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant
          className={cn(
            "mh:w-[400px] justify-start text-left font-normal mt-1 rounded-sm mh:rounded-lg mh:mt-0.5",
            !date && "text-muted-foreground",
            "mh:text-[30px] text-[12px]",
            "mh:h-[4vh] h-[32px]",
            "border border-black"
          )}
        >
          <CalendarIcon className="mh:mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
