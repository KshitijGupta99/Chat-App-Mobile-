import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const buttons = [
  ['%', 'CE', 'C', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['x²', '0', '.', '='],
];

export default function Index() {
  const [exp, setExp] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (val: string) => {
    if (val === 'C') {
      setExp('');
      setResult('');
    } else if (val === 'CE') {
      setExp(exp.slice(0, -1));
    } else if (val === '=') {
      try {
        const formatted = exp.replace(/×/g, '*').replace(/÷/g, '/');
        const evalResult = eval(formatted);
        setResult(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else if (val === 'x²') {
      try {
        const squared = eval(exp) ** 2;
        setResult(squared.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setExp(exp + val);
    }
  };

  return (
    <View className="flex-1 items-center px-2 bg-primary">
      <View className="h-40 w-full bg-secondary rounded-3xl my-2 p-3 justify-end items-end">
        <ScrollView horizontal>
          <Text className="text-white text-xl">{exp}</Text>
        </ScrollView>
        <Text className="text-white text-2xl font-bold">{result}</Text>
      </View>

      <View className="w-full">
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row my-1">
            {row.map((btn) => (
              <Pressable
                key={btn}
                onPress={() => handlePress(btn)}
                className="flex-1 h-20 mx-1 rounded-2xl bg-tertiary border justify-center items-center active:bg-accent"
              >
                <Text className="">{btn}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
