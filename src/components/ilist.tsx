import React, { createRef, Ref, useEffect } from "react";
import { FlatList, FlatListProps, ViewStyle } from "react-native";
import { scaleStyle } from "../styles/mixins";
import { Flat } from "lodash";

export interface IListProps extends FlatListProps<any> {
  createRef?: (ref: FlatList) => void;
}

export function IList(props: IListProps) {
  let ref = createRef<FlatList>();
  let isLoading = false;
  let style = props.style as ViewStyle;
  if (style) {
    style = scaleStyle(style);
  }

  useEffect(() => {
    if (props.createRef && ref.current) {
      props.createRef(ref.current);
    }
  }, [ref]);

  /**
   * Loadmore when scroll to bottom with distance is onEndReachedThreshold
   */
  const onEndReached = async () => {
    try {
      if (!props.onEndReached) {
        return;
      }
      if (isLoading) {
        return;
      }
      isLoading = true;
      await props.onEndReached({ distanceFromEnd: 1 });
    } catch (error) {
    } finally {
      isLoading = false;
    }
  };

  return (
    <FlatList
      ref={ref}
      keyExtractor={(item, index) => {
        return index + "";
      }}
      onEndReachedThreshold={1}
      onEndReached={onEndReached}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      {...props}
      style={style}
    ></FlatList>
  );
}
