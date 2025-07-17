import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../types/Task";

interface Props {
  task: Task;
  toggleComplete: () => void;
  deleteTask: () => void;
}

export default function TaskItem({ task, toggleComplete, deleteTask }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.firsthalf}>
        <TouchableOpacity onPress={toggleComplete}>
          <Text style={task.completed ? styles.done : styles.text}>
            {task.title}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={deleteTask}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 4,
    borderRadius: 8,
    elevation: 1,
  },
  firsthalf: {
    maxWidth: 250,
  },
  text: {
    fontSize: 16,
  },
  done: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
  delete: {
    color: "red",
    fontSize: 18,
  },
});
