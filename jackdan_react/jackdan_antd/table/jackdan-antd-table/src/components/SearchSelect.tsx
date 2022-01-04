import React, { useState, useRef, useMemo, ReactNode } from 'react';
import { Select, Spin} from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';

export interface SearchSelectProps<ValueType = any> extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function SearchSelect<ValueType extends { key?: string; label: ReactNode; value: string | number } = any>({ fetchOptions, debounceTimeout = 800, ...props }: SearchSelectProps) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const searchFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then(newOptions => {
        if(fetchId !== fetchRef.current) {
          // for fetch callbacl order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      showSearch
      labelInValue
      filterOption={false}
      onSearch={searchFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of searchSelect
interface searchSelectUserValue {
  label: string;
  value: string;
};

async function fetchUserList(username: string): Promise<searchSelectUserValue[]> {
  console.log('fetching user', username);

  // 本地mock
  return new Promise((resolve, reject) => {
    const response = [
      {label: '张三', value: 'zhansan'}, 
      {label: '李四', value: 'lisi'}, 
      {label: '王五', value: 'wangwu'}
    ];

    resolve(response);
  });
  // return fetch('url').then((res) => {});
}

const SearchSelectDemo = () => {
  const [value, setValue] = useState<searchSelectUserValue[]>([]);

  return (
    <div>
    <SearchSelect
      mode="multiple"
      value={value}
      placeholder="请输入搜索条件"
      fetchOptions={fetchUserList}
      onChange={newValue => {
        setValue(newValue);
      }}
      style={{width: '100%'}}
    />
    </div>
  );
};

export default SearchSelectDemo;