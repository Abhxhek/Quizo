import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const MultiSelect = ({ options, selected, onChange, placeholder }: {
  options: { label: string; value: string }[];
  selected: string[];
  onChange: (val: string[]) => void;
  placeholder?: string;
}) => {
  const toggleValue = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="sm:w-1/3 justify-start text-left font-normal">
          {selected.length ? `${selected.length} selected` : placeholder || "Select"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]">
        <div className="space-y-2">
          {options.map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selected.includes(opt.value)}
                onCheckedChange={() => toggleValue(opt.value)}
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};