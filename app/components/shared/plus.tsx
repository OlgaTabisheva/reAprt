import React from 'react'
import { Button } from "./button/button"
import { Input } from "./input/input"
import { PlusIcon, Minus } from 'lucide-react'

interface PlusProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function Plus({ value, onChange, min = 0, max = Infinity }: PlusProps) {
  const increment = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const decrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Button 
        type="button" 
        variant="outline" 
        size="icon" 
        onClick={decrement}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="w-16 text-center"
        min={min}
        max={max}
      />
      <Button 
        type="button" 
        variant="outline" 
        size="icon" 
        onClick={increment}
        disabled={value >= max}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

